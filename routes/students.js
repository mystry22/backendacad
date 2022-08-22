const express = require('express');
const router = express.Router();
const { sumEntries, deleteStudent, getStudent, createNewEntry, checkIfReg, updateStudent, getAllStudents } = require('../model/CourseEntry');
const { getCustomDate } = require('../utility_functions/util_func');
const { register_validator,emailVal } = require('../validation/Validation_Schema');
const { checkLogin } = require('../utility_functions/jwt');


router.post('/register', checkLogin, async (req, res) => {

    const { error } = register_validator.validate(req.body);

    if (error) {
        res.status(403).json({ message: error.details[0].message });
    } else {
        //get previous total student entries
        const totalEntries = await sumEntries();
        //get user input
        const {
            subject1,
            subject2,
            subject3,
            subject4,
            subject5,
            subject6,
            subject7,
            subject8,
            subject9,
            subject10,
            subject11,
            subject12,
            email
        } = req.body;

        let count = 0;

        //check number of courses entered
        const arr = [subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, subject9, subject10, subject11, subject12];
        for (i = 0; i < arr.length; i++) {
            if (arr[i]) {
                count = count + 1;
            } else {

            }
        }

        if (count < 5) {
            res.status(400).json({ 'msg': 'Cannot register less than 5 subjects' });
        } else if (count > 9) {
            res.status(400).json({ 'msg': 'Cannot register more than 9 subjects' });
        } else {
            //check if previously registered
            const isExist = await checkIfReg(email);

            if (isExist.length > 0) {
                res.status(400).json({ 'msg': 'Sorry student already exist' });

            } else {
                //check for maximum entries
                if (totalEntries >= 9354) {
                    res.status(400).json({ 'msg': 'Sorry student max admision size reached' });
                } else {
                    const data = {
                        subject1: req.body.subject1,
                        subject2: req.body.subject2,
                        subject3: req.body.subject3,
                        subject4: req.body.subject4,
                        subject5: req.body.subject5,
                        subject6: req.body.subject6,
                        subject7: req.body.subject7,
                        subject8: req.body.subject8,
                        subject9: req.body.subject9,
                        subject10: req.body.subject10,
                        subject11: req.body.subject11,
                        subject12: req.body.subject12,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        level: req.body.level,
                        reg_date: getCustomDate()
                    }
                    const isReg = createNewEntry(data);
                    if (isReg) {
                        res.status(201).json({ 'msg': 'New student registered successfuly' });
                    } else {
                        res.status(400).json({ 'msg': 'Unable to complete operations at the moment' });
                    }

                }

            }

        }
    }
});

router.get('/totalNoOfStud', checkLogin, async (req, res) => {
    const total = await sumEntries();

    res.status(200).json({ 'Total Registered Students': total });
});

router.post('/deleteStudent', checkLogin, async (req, res) => {
    

        const { email } = req.body;
    
        if (email) {
            const student = await getStudent(email);
    
            if (student.length > 0) {
    
                const isDeleted = await deleteStudent(email);
                if (isDeleted) {
                    res.status(201).json({ 'msg': 'One student deleted' });
                } else {
                    res.status(400).json({ 'msg': 'Unable to complete operation' });
                }
            } else {
                res.status(404).json({ 'msg': 'Student does not exist' });
            }
        } else {
            res.status(400).json({ 'msg': 'Please provide a valid email address' });
        }
    
});

router.post('/updateStudent', checkLogin, async (req, res) => {
    

        const { email } = req.body;
        if (email) {
            const student = await getStudent(email);
    
            if (student) {
                const data = {
                    subject1: req.body.subject1,
                    subject2: req.body.subject2,
                    subject3: req.body.subject3,
                    subject4: req.body.subject4,
                    subject5: req.body.subject5,
                    subject6: req.body.subject6,
                    subject7: req.body.subject7,
                    subject8: req.body.subject8,
                    subject9: req.body.subject9,
                    subject10: req.body.subject10,
                    subject11: req.body.subject11,
                    subject12: req.body.subject12,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    level: req.body.level
                };
                const isUpdate = await updateStudent(email, data);
    
                if (isUpdate) {
                    res.status(201).json({ 'msg': 'User data updated successfuly' });
                } else {
                    res.status(400).json({ 'msg': 'Unable to complete operations at the moment' });
                }
            } else {
                res.status(400).json({ 'msg': 'Kindly provide a valid email locator' });
            }
        } else {
            res.status(400).json({ 'msg': 'Please provide a valid email address' });
        }
    
});

router.get('/allstudents', checkLogin, async (req, res) => {
    const allStudents = await getAllStudents();

    if (allStudents.length > 0) {
        return res.status(201).json(allStudents);
    } else {
        return res.status(404).json({ 'msg': 'No user found' });
    }
});







module.exports = router;