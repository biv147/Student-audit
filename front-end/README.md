# AuditTrail - Front End Component
This repository contains the code for the front-end portion of our project. Vue.js was used on the front-end, along with an express application to run our server when deployed on Heroku

## Pre-requisites
In order to run this project, Node.js must be installed and so must NPM. This project was built using an Ubuntu-base OS by all team members; hence, to achieve best results (a guarantee of no errors while running locally), please run it on an instance of Ubuntu (WSL on Windows will also work).

## Project setup
To install all the necessary dependencies, run:
```
npm install
```

### Compiles and hot-reloads for development
To run the project, run this command:
```
npm run serve
```
Afterwards, open `localhost:8080` to view the front-end application. It will not work without the back-end portion.

### Using the Application
In order to use the application, you will need to either log in as an administrator, or log in as a student. We have set up a sample admin user for you to test, as well as a sample user.

#### Sample User:
- **Student Number**: 100651838
- **Password**: 123456
- **University**: Ontario Tech University

#### Sample Admin:
- **Email Address**: admin.org@gmail.com
- **Password**: 123456

From here, you can explore the application 🙂

### Compiles and minifies for production
To build for production, run this command:
```
npm run build
```


## Credits
This repository was built as part of the final project for the SOFE 4630 course (Cloud Computing), in the Software Engineering program at Ontario Tech University
