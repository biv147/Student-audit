import os
import json
import pymongo
import datetime

from pytz import timezone
from bson import ObjectId
from dotenv import load_dotenv
from datetime import datetime, timedelta

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from EmailService import views


load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))

database = connection['audittrail']

reviews = database['reviews']
checkStudent = database['students']
blankPlan = database['blank_plans']
plans = database['plans']
courses = database['courses']
universities = database['universities']
semester = database['semester']


@csrf_exempt
def delete_review(request):
    data = request.GET
    query = {'_id': ObjectId(data['reviewId'])}

    reviews.delete_one(query)

    return HttpResponse(200)


@csrf_exempt
def add_review(request):
    data = json.loads(request.body)
    review = data['params']
    review['dateAdded'] = datetime.now(timezone('US/Eastern'))

    x = reviews.insert_one(review)

    return HttpResponse(str(x.inserted_id))


@csrf_exempt
def get_course_data(request):
    data = request.GET
    query = {'courseId': data['courseId']}

    revs = reviews.find(query)
    course = courses.find_one(query)

    course['university'] = str(course['university'])
    course['_id'] = str(course['_id'])

    res = {
        'course': course,
        "reviews": [],
    }

    for rev in revs:
        rev['_id'] = str(rev['_id'])
        rev['studentId'] = str(rev['studentId'])
        rev['dateAdded'] = rev['dateAdded'].strftime('%m/%d/%Y')

        res['reviews'].append(rev)

    return HttpResponse(json.dumps(res))


@csrf_exempt
def update_plan(request):
    data = json.loads(request.body)
    planToChange = data['params']['plan']
    for i in range(len(planToChange['plan'])):
        for j in range(len(planToChange['plan'][i]['courses'])):
            planToChange['plan'][i]['courses'][j].pop('prerequisites', None)
            planToChange['plan'][i]['courses'][j].pop('fullName', None)

    for i in range(len(planToChange['electives'])):
        planToChange['electives'][i] = planToChange['electives'][i]['name']

    planToChange['_id'] = ObjectId(planToChange['_id'])
    planToChange['student'] = ObjectId(planToChange['student'])

    student = checkStudent.find_one(
        {'_id': ObjectId(str(planToChange['student']))})
    views.program_edit_email(student['email'], int(student['studentNumber']),
                             student['firstName'], student['lastName'],
                             planToChange['name'])

    plans.delete_one({'_id': ObjectId(planToChange['_id'])})
    res = plans.insert_one(planToChange)

    student = checkStudent.find_one({'_id': planToChange['student']})

    return HttpResponse(200)


@csrf_exempt
def get_plan(request):
    data = request.GET
    query = {'student': ObjectId(data['studentID'])}
    res = plans.find_one(query)

    if res == None:
        return HttpResponse(json.dumps({ 'error': 'no plan exists for student' }))

    courseList = []
    for semester in res['plan']:
        for course in semester['courses']:
            courseList.append(course['name'])

    for course in res['electives']:
        courseList.append(course)

    coursesFromDb = courses.find({"courseId": {"$in": courseList}})
    courseMapping = {}
    for course in coursesFromDb:
        courseMapping[course['courseId']] = course

    for i in range(len(res['plan'])):
        semester = res['plan'][i]
        for j in range(len(semester['courses'])):
            res['plan'][i]['courses'][j]['prerequisites'] = courseMapping[res['plan'][i]['courses'][j]['name']]['prerequisites']
            res['plan'][i]['courses'][j]['fullName'] = courseMapping[res['plan'][i]['courses'][j]['name']]['name']

    for i in range(len(res['electives'])):
        res['electives'][i] = {
            'prerequisites': courseMapping[res['electives'][i]]['prerequisites'],
            'fullName': courseMapping[res['electives'][i]]['name'],
            'name': courseMapping[res['electives'][i]]['courseId'],
        }

    res['student'] = str(res['student'])
    res['_id'] = str(res['_id'])
    res['university'] = str(res['university'])

    return HttpResponse(json.dumps(res))


@csrf_exempt
def get_blank_plans(request):
    data = request.GET
    query = {'university': ObjectId(data['university'])}
    res = blankPlan.find(query)
    planss = []
    for plan in res:
        planss.append(plan);

    for i in range(len(planss)):
        planss[i]['university'] = str(planss[i]['university'])
        planss[i]['_id'] = str(planss[i]['_id'])

    return HttpResponse(json.dumps(planss))


@csrf_exempt
def withdraw_plan(request):
    data = request.GET
    query = {'_id': ObjectId(str(data['plan']))}

    plan = plans.find_one(query)
    student = checkStudent.find_one({'_id': plan['student']})

    views.withdrawal_email(student['email'], student['studentNumber'],
                           student['firstName'], student['lastName'],
                           plan['name'])

    plans.delete_one(query)

    return HttpResponse(200)


@csrf_exempt
def select_plan(request):
    data = request.GET
    query = {'_id': ObjectId(data['plan'])}

    blank_plan = blankPlan.find_one(query)
    blank_plan['student'] = ObjectId(data['student'])
    currSemester = semester.find_one()

    fall = True
    semesters = ["Fall", "Winter"]
    year = currSemester['nextStartYear']
    for i in range(len(blank_plan['plan'])):
        if fall:
            blank_plan['plan'][i]['semester'] = "Fall" + " " + str(year)
            fall = False
            year += 1
        else:
            blank_plan['plan'][i]['semester'] = "Winter" + " " + str(year)
            fall = True

        blank_plan['plan'][i]['done'] = False

        for j in range(len(blank_plan['plan'][i]['courses'])):
            blank_plan['plan'][i]['courses'][j] = {
                'name': blank_plan['plan'][i]['courses'][j],
                'grade': -1,
            }

    blank_plan.pop('_id', None)
    plans.insert_one(blank_plan)

    stud = checkStudent.find_one({'_id': blank_plan['student']})
    university = universities.find_one(
        {'_id': stud['university'] })

    views.registration_email(stud['email'], stud['studentNumber'], stud['firstName'], stud['lastName'], blank_plan['name'], university['name'])

    return HttpResponse(json.dumps({ 'status': 200 }))


@csrf_exempt
def get_universities(request):
    res = universities.find()
    unis = []

    for uni in res:
        uni['_id'] = str(uni['_id'])
        unis.append(uni)

    return HttpResponse(json.dumps(unis))


@csrf_exempt
def login(request):
    data = request.GET

    query = {
        "studentNumber": int(data['studentID']),
        "university": ObjectId(data['university'])
    }

    loginInfo = checkStudent.find_one(query)
    if loginInfo == None:
        return HttpResponse(json.dumps({'error': 'User does not exist'}))

    querypassword = loginInfo['password']
    if data['password'] == querypassword:
        loginInfo['university'] = str(loginInfo['university'])
        loginInfo['_id'] = str(loginInfo['_id'])

        views.login_email(str(data['studentID']), data['university'])

        return HttpResponse(json.dumps(loginInfo))

    return HttpResponse(json.dumps({'error': 'Incorrect Password'}))
