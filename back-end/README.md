# AudiTrail Backend Application
This repository contains the code for the back-end portion of our project. It is written in Python, and is an implementation of the Django Web Application framework. It is built around a microservices architecture. For more details, please refer to the submitted report.

## Pre-requisites
In order to run this program, Python 3 must be installed. For the best experience, please install Python 3.8.5. Ubuntu was the base operating system that all team members used to run the application.

Once Python 3.8.5 is installed, run the following commands:

```shell
sudo apt-get install python3-pip
```
```shell
sudo pip3 install virtualenv
```
```shell
cd audittrail-backend
```
```shell
source env/bin/activate
```
```shell
pip install -r requirements.txt
```

Now you have a fully-functional python implementation, with all the needed packages, installed and ready to go. You will need to create your own Database on MongoDB that resembles the structure defined in the following ER Diagram:
![image](https://user-images.githubusercontent.com/18406063/114291766-eb925480-9a57-11eb-98fd-34554eb14238.png)

Next, setup a SendGrid email service that allows you to send emails. The free-plan will work for demonstration and testing purposes.

Last step: create a `.env` file that contains the following structure, including the API keys required for the application:
```env
MONGO_URI=<INSERT_MONGO_URL_HERE>
SENDGRID_URI=<INSERT_SENDGRID_KEY_HERE>
```


## Running the application
To run the application locally, simply move into the root folder of the project (that contains `manage.py`), and run the following command:

```shell
python3 manage.py runserver
```

## Credits
This repository was built as part of the final project for the SOFE 4630 course (Cloud Computing), in the Software Engineering program at Ontario Tech University
