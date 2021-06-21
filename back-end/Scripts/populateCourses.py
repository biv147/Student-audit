import os
import sys
import json
import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv

load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))
auditTrailDatabase = connection['audittrail']
coursesCollection = auditTrailDatabase['courses']


def enter_custom():
    students = []
    while True:
        if str(input("Another record (Y/N)?")).lower() == 'y':
            student = {}
            student['courseId'] = str(input("Enter course id: "))
            student['name'] = str(input("Enter course name: "))
            student['university'] = ObjectId(
                str(
                    input(
                        "Enter the ObjectID of the university of this course: "
                    )))
            prereqs, reviews = [], []
            while True:
                if str(input("Another prereq (Y/N)?")).lower() == 'y':
                    prereqs.append(
                        ObjectId(
                            str(
                                input(
                                    "Enter the ObjectID of the prerequisite of this course: "
                                ))))
                else:
                    break

            while True:
                if str(input("Another review (Y/N)?")).lower() == 'y':
                    prereqs.append(
                        ObjectId(
                            str(
                                input(
                                    "Enter the ObjectID of the review of this course: "
                                ))))
                else:
                    break



            students.append(student)
        else:
            return students


def get_default():
    items = ""
    with open('./Constants/courses.json') as file:
        items = json.load(file)

    for i in range(len(items)):
        print(items[i])
        items[i]['university'] = ObjectId(items[i]['university'])

    coursesCollection.insert_many(items)


def add_to_db(items):
    coursesCollection.insert_many(items)


def test():
    res = coursesCollection.find({})
    for doc in res:
        print(doc)


def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == "custom":
            add_to_db(enter_custom())
        else:
            test()
        return

    add_to_db(get_default())


if __name__ == '__main__':
    main()
