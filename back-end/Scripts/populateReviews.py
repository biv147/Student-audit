import os
import sys
import json
import pymongo
from pytz import timezone
from dotenv import load_dotenv
from bson.objectid import ObjectId
from datetime import datetime, timedelta


load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))
auditTrailDatabase = connection['audittrail']
reviewsCollection = auditTrailDatabase['reviews']

today = datetime.now(timezone('US/Eastern'))

def enter_custom():
    students = []
    while True:
        again = str(input("Another record (Y/N)?")).lower()
        if again == 'y':
            student = {}
            student['rating'] = int(input("Enter rating: "))
            student['response'] = str(input("Enter your review of the course: "))
            student['dateAdded'] = today
            student['studentId'] = ObjectId(
                str(
                    input(
                        "Enter the ObjectID of the university of this student: "
                    )))
            student['courseId'] = str(input("Enter course Id (SOFE2800, for example): "))

            students.append(student)
        else:
            return students


def get_default():
    items = ""
    with open('./Constants/Reviews.json') as file:
        items = json.load(file)

    for i in range(len(items)):
        items[i]['studentId'] = ObjectId(items[i]['studentId'])
        items[i]['dateAdded'] = today;

    return items


def add_to_db(items):
    reviewsCollection.insert_many(items)


def test():
    res = reviewsCollection.find({})
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


main()
