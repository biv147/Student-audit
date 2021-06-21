# from django.https import HTTPResponse

# client = pymongo.MongoClient('mongodatabase+srv://root:root@cluster0.5gf0e.mongodatabase.net/audittrail?retryWrites=true&w=majority')
# database = client['audittrail']
# checkStudent = database['students']
# blankPlan = database['blank_plans']
# plans = database['plans']

# def login(request):
#     #axios to get login values from front end
#     studentNumber = ""
#     password = ""
#     university = ""

#     query = {"studentNumber": studentNumber , "password": password, "university", university}
#     studentLoginInfo = list(checkStudent.find(query))
#     if (len(studentLoginInfo) > 0):
#         queryForPassword = {"password": password}
#         checkStudentPass = checkStudent.find_one(queryForPassword)
#         querypassword = checkStudentPass['password']
#         if password == querypassword:
#             ## send verification to front end
#             print("yes")
#     else:
#         #send error to front end
#         print("no")

# def getPlans(request):
#     #get student ID from axios from front end
#     studentID = ""
#     university = ""
#     query = { 'studentId': ObjectId(data['studentID']), "university": university}
#     plansInStudentAccount = list(plans.find(query))
#     if (len(plansInStudentAccount)>0):
#         #send the info about the program they enrolled in to the front end
#         print("yes")
#     else: 
#         queryForBlankPlans = {"university": university}
#         listOfBlankPlans = list(blankPlan.list(query))
#         #send the list back to front end

