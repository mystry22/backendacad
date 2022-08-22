const express = require('express');
const router = express.Router();
const { getAdmin, createNewAdmin } = require('../model/AdminEntry');
const { signToken } = require('../functions/jwt');
const { comparePassword, encrypty } = require('../functions/encrypt');
const { adminReg,adminSignin } = require('../validation/Validation_Schema');
const { getCustomDate } = require('../utility_functions/util_func');

router.post('/userlogin', async (req, res) => {
    const {error} = adminSignin.validate(req.body);

    if(error){

    }
    const { email, pass } = req.body;

    //veriify username
    const result = await getAdmin(email);
    if (result.length < 1) {
        res.status(404).json({ msg: 'No User found' });
    } else {
        //verify password
        comparePassword(result, pass).then(response => {

            if (response == 'verified') {
                //sign token
                signToken(email).then(token => {
                    const returnData = { token: token, msg: 'login success' }
                    res.status(200).json(returnData);
                });
            } else {
                res.status(403).json({ msg: 'Invalid Credentials' });
            }
        })

    }

});


router.post('/createAdmin', async (req, res) => {
    const { error } = adminReg.validate(req.body);
    

    if (error) {
        res.status(400).json({ message: error.details[0].message });
    } else {
        
        const { pass, email } = req.body;
        const isExistAdmin = await getAdmin(email);
        if (isExistAdmin) {
            res.status(200).json({ 'msg': 'User Admin already exist' });
           
        } else {
            
            const hashedPassword = await encrypty(pass)
            const data = {
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                uniquekey: hashedPassword,
                reg_date: getCustomDate()
            }

            const newAdmin = await createNewAdmin(data);
            if (newAdmin == 'ok') {
                const token = await signToken(email)
                res.status(201).json({ 'msg': 'New Admin created', 'token': token });
            } else {
                res.status(400).json({ 'msg': 'Unable to complete operations at the moment' });
            }

        }
    }

});



module.exports = router;

