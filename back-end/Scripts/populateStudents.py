import os
import sys
import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv


load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))
auditTrailDatabase = connection['audittrail']
studentsCollection = auditTrailDatabase['students']


def enter_custom():
    students = []
    while True:
        again = str(input("Another record (Y/N)?")).lower()
        if again == 'y':
            student = {}
            student['firstName'] = str(input("Enter first name: "))
            student['lastName'] = str(input("Enter last name: "))
            student['studentNumber'] = int(input("Enter student number: "))
            student['university'] = ObjectId(str(input("Enter the ObjectID of the university of this student: ")))
            student['email'] = str(input("Enter email address: "))

            students.append(student)
        else:
            return students


def get_default():
    return [{
        'firstName': 'Preet',
        'lastName': 'Khasakia',
        'studentNumber': 100653168,
        'university': ObjectId("605655053cae059dff8893d0"),
        'email': 'preet.khasakia@ontariotechu.net'
    }, {
        'firstName': 'Harsh',
        'lastName': 'Goswami',
        'studentNumber': 100654736,
        'university': ObjectId("605655053cae059dff8893d0"),
        'email': 'harsh.goswami@ontariotechu.net'
    }, {
        'firstName': 'Vraj',
        'lastName': 'Shah',
        'studentNumber': 100658669,
        'university': ObjectId("605655053cae059dff8893d0"),
        'email': 'vraj.shah@ontariotechu.net'
    }]


def add_to_db(items):
    studentsCollection.insert_many(items)


def test():
    res = studentsCollection.find({})
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
