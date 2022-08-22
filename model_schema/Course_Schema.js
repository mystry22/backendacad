const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    reg_date: {
        type: Date,
        
    },
    level: {
        type: String,
        min: 2,
        max: 1005
    },
    first_name: {
        type: String,
        min: 2,
        max: 1005
    },
    last_name: {
        type: String,
        min: 2,
        max: 1005
    },
    subject1: {
        type: String,
        min: 2,
        max: 1005
    },
    subject2: {
        type: String,
        min: 2,
        max: 1005
    },
    subject3:{
        type: String,
        min: 2,
        max: 1005
    },
    subject4:{
        type: String,
        min: 2,
        max: 1005
    },
    subject5:{
        type: String,
        min: 2,
        max: 1005
    },
    subject6:{
        type: String,
        min: 2,
        max: 1005
    },
    subject7:{
        type: String,
        min: 2,
        max: 1005
    },
    subject8:{
        type: String,
        min: 2,
        max: 1005
    },
    subject9:{
        type: String,
        min: 2,
        max: 1005
    },
    subject10:{
        type: String,
        min: 2,
        max: 1005
    },
    subject11:{
        type: String,
        min: 2,
        max: 1005
    },
    subject12:{
        type: String,
        min: 2,
        max: 1005
    },
    email:{
        type: String,
        min: 2,
        max: 1005
    },
    
    
    
    
    
 
});

module.exports = mongoose.model('Course',Course);