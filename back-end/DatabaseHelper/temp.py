import pymongo
from bson import ObjectId


client = pymongo.MongoClient('mongodb+srv://root:root@cluster0.5gf0e.mongodb.net/audittrail?retryWrites=true&w=majority')
database = client['audittrail']
plans = database['plans']
reviews = database['reviews']


def get_plan(request):
    data = request.GET
    query = {'student': ObjectId("60564e863cae059dff8893cf")}
    res = plans.find_one(query)


get_plan()