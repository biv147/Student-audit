import os
import sys
import json
import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv


load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))
auditTrailDatabase = connection['audittrail']

plansCollection = auditTrailDatabase['plans']
blankPlansCollection = auditTrailDatabase['blank_plans']
coursesCollection = auditTrailDatabase['courses']
semesterCollection = auditTrailDatabase['semester']

semester = semesterCollection.find_one()


def get_blank_plan():
    plan = blankPlansCollection.find_one()
    courses = set()
    for semester in plan['plan']:
        for course in semester['courses']:
            courses.add(course)

    fullCourses = coursesCollection.find({"courseId": {"$in": list(courses)}})
    courseSet = dict()
    for c in fullCourses:
        courseSet[c['courseId']] = c

    studentPlan = {
        "name": semester['name'],
        "university": semester['university'],
        "description": semester['description'],
        "plan": [],
        "electives": []
    }

    nextSem = semester['nextStartSemester']
    nextYear = int(semester['nextStartYear'])
    for semester in plan['plan']:
        sem = { 'courses': [], 'semester': nextSem + " " + str(nextYear)}
        for course in semester['courses']:
            sem['courses'].append(courseSet[course])


def get_default():
    item = ""
    with open('./Constants/BlankPlanSOFE.json') as file:
        item = json.load(file)

    item['university'] = ObjectId(item['university'])

    return item


def add_to_db(item):
    plansCollection.insert_one(item)


def test():
    res = plansCollection.find({})
    for doc in res:
        print(doc)


def main():
    # add_to_db(get_default())
    print("wtf")
    get_blank_plan()


if __name__ == '__main__':
    main()
