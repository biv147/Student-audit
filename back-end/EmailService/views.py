import os
import io
import traceback

from pymongo import MongoClient
from bson.objectid import ObjectId
from dotenv import load_dotenv

from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.views.decorators.csrf import csrf_exempt

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

load_dotenv()

cluster = MongoClient(os.getenv("MONGO_URI"))
db = cluster["audittrail"]
col_stud = db["students"]
col_blank_plans = db["blank_plans"]
col_unis = db["universities"]

logo_data = open('EmailService/assets/logo.png', 'rb').read()


def login_email(student_id, university_id):
    student_id = student_id.strip()
    result = col_stud.find_one({
        "studentNumber": int(student_id),
        "university": ObjectId(university_id)
    })
    name = result["firstName"] + " " + result["lastName"]
    email = result["email"]
    with open("EmailService/Templates/login.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", student_id)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='Successfuly Logged In 🙋‍♀️🙋‍♂️',
                   html_content=template)
    try:
        # Attempt to send it, or catch the exception and print it
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        traceback.print_exc()


@csrf_exempt
def logout_email(request):
    data = request.GET

    student_id = data['student_id']
    result = col_stud.find_one({
        "studentNumber": int(student_id),
        "university": ObjectId(data['university_id'])
    })
    name = result["firstName"] + " " + result["lastName"]
    email = result["email"]
    with open("EmailService/Templates/logout.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", student_id)

    # message = Mail(from_email='audittrail.org@gmail.com',
    #                to_emails=email,
    #                subject='Successfuly Logged Out 👋',
    #                html_content=template)
    try:
        # Attempt to send it, or catch the exception and print it
        # sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        # response = sg.send(message)
        return HttpResponse(200)
    except Exception as e:
        print(e)
        return HttpResponse(-1)


def registration_email(email, studentNumber, firstName, lastName, programName,
                       universityName):
    name = firstName + " " + lastName
    with open("EmailService/Templates/registration.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", str(studentNumber))
    template = template.replace("PROGRAM_PLACEHOLDER", programName)
    template = template.replace("PLACEHOLDER_UNIVERSITY", universityName)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='You Have Registered! 🆕',
                   html_content=template)
    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        traceback.print_exc()


def withdrawal_email(email, studentNumber, firstName, lastName, programName):
    name = firstName + " " + lastName
    with open("EmailService/Templates/withdrawal.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", str(studentNumber))
    template = template.replace("PROGRAM_PLACEHOLDER", programName)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='You Have Withdrawn 😔',
                   html_content=template)
    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        print(e)


def program_edit_email(email, studentNumber, firstName, lastName, programName):
    name = firstName + " " + lastName
    with open("EmailService/Templates/programEdit.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", str(studentNumber))
    template = template.replace("PROGRAM_PLACEHOLDER", programName)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='Your Program Has Been Updated! ✍',
                   html_content=template)
    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        print(e)


def student_registered_email(email, studentNumber, firstName, lastName,
                             universityName):
    name = firstName + " " + lastName
    with open("EmailService/Templates/studentCreated.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", str(studentNumber))
    template = template.replace("PLACEHOLDER_UNIVERSITY", universityName)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='Welcome! 🌟',
                   html_content=template)
    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        print(e)


def student_deleted_email(email, studentNumber, firstName, lastName,
                          universityName):
    name = firstName + " " + lastName
    with open("EmailService/Templates/studentDestroyed.html", "r") as file:
        template = file.read()

    template = template.replace("REPLACE_PLACEHOLDER_NAME", name)
    template = template.replace("REPLACE_STUDENT_NUMBER", str(studentNumber))
    template = template.replace("PLACEHOLDER_UNIVERSITY", universityName)

    message = Mail(from_email='audittrail.org@gmail.com',
                   to_emails=email,
                   subject='Good Bye',
                   html_content=template)
    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_URI"))
        response = sg.send(message)
    except Exception as e:
        print(e)
