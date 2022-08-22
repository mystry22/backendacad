# Getting Started with Backend Accademy School Api

## Introduction

The Backend Academy API is used for students course registration and has links in which
registerd admins have the functionalities to perform CRUD Operations and must provide a token
for all CRUD requests

### Concept

A new Admin is created and has all the priviledges below assigned:

Create new student with all subjects. and may specify to min of 5 subjects and max 9 subjects,
when the number of register courses is less than 5 it propmts errors which is handled by the validation
module and returns appropriate messages to the user

Modifications can still be done to registered students records using the provided API's in the
API collection, these modifications are the in the DELETE,UPDATE,REQUEST ALL API 
(see API collection file for required parameter details)


### Dependencies

1. bcrypt // for password hashing
2. cors // to allow cross origin http requests
3. dotenv // creating local environment constants
4. express // backend service
5. joi // user's data validation
6. jsonwebtoken // to generate user's token after authentication
7. mongoose // noSQL db driver
8. nodemon // listens for code change

### API Links
https://backendacademy.herokuapp.com/api/auth/createAdmin
https://backendacademy.herokuapp.com/api/auth/userlogin
https://backendacademy.herokuapp.com/api/students/register
https://backendacademy.herokuapp.com/api/students/updateStudent
https://backendacademy.herokuapp.com/api/students/allstudents
https://backendacademy.herokuapp.com/api/students/deleteStudent
https://backendacademy.herokuapp.com/api/students/totalNoOfStud



### Note

To run locally kindly create an ENV file and provide a TOKEN_SECRET and DB_CONNECTION 
constants