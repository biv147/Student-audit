import os
import sys
import json
import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv


load_dotenv()

connection = pymongo.MongoClient(os.getenv("MONGO_URI"))
auditTrailDatabase = connection['audittrail']
coursesCollection = auditTrailDatabase['blank_plans']


def get_default():
    item = ""
    with open('./Constants/BlankPlanSOFE.json') as file:
        item = json.load(file)

    item['university'] = ObjectId(item['university'])

    return item


def add_to_db(item):
    coursesCollection.insert_one(item)


def test():
    res = coursesCollection.find({})
    for doc in res:
        print(doc)


def main():
    # if len(sys.argv) > 1:
    #     if sys.argv[1] == "custom":
    #         add_to_db(enter_custom())
    #     else:
    #         test()
    #     return

    add_to_db(get_default())


if __name__ == '__main__':
    main()
