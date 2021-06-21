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
students = database['students']
admin_users = database['admin_users']
plans = database['plans']
courses = database['courses']
universities = database['universities']
semester = database['semester']


@csrf_exempt
def login(request):
    data = request.GET

    query = {
        "email": data['email'],
    }

    loginInfo = admin_users.find_one(query)
    if loginInfo == None:
        return HttpResponse(json.dumps({'error': 'User does not exist'}))

    if data['password'] == loginInfo['password']:
        loginInfo['_id'] = str(loginInfo['_id'])
        loginInfo['universityId'] = str(loginInfo['universityId'])
        university = universities.find_one(
            {'_id': ObjectId(loginInfo['universityId'])})
        print(university)
        loginInfo['university'] = university
        loginInfo['university']['_id'] = str(loginInfo['university']['_id'])

        return HttpResponse(json.dumps(loginInfo))

    return HttpResponse(json.dumps({'error': 'Incorrect Password'}))


@csrf_exempt
def get_students(request):
    data = request.GET
    query = {
        "university": ObjectId(data['universityId']),
    }

    studentRes = students.find(query)
    studentsList = []

    for student in studentRes:
        student['_id'] = str(student['_id'])
        student['university'] = str(student['university'])
        studentsList.append(student)

    return HttpResponse(json.dumps(studentsList))


@csrf_exempt
def remove_student(request):
    data = request.GET
    query = {
        "_id": ObjectId(data['_id']),
    }

    student = students.find_one(query)
    university = universities.find_one(
        {'_id': ObjectId(student['university'])})

    views.student_deleted_email(student['email'],
                                   int(student['studentNumber']),
                                   student['firstName'], student['lastName'],
                                   university['name'])

    students.delete_one(query)

    return HttpResponse(200)


@csrf_exempt
def add_student(request):
    data = request.GET
    query = {
        "firstName": data['firstName'],
        "lastName": data['lastName'],
        "studentNumber": int(data['studentNumber']),
        "university": ObjectId(data['university']),
        "email": data['email'],
        "password": data['password'],
    }

    university = universities.find_one({'_id': ObjectId(data['university'])})
    views.student_registered_email(data['email'], int(data['studentNumber']),
                                   data['firstName'], data['lastName'],
                                   university['name'])

    res = students.insert_one(query)

    return HttpResponse(res.inserted_id)
