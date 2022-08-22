const Course = require('../model_schema/Course_Schema');

const checkIfReg = async function(email){
    const userExist = await Course.find({email: email});
    return userExist;
}

const createNewEntry = async function(data){
    const entry = new Course(data);
    const resp = await entry.save();
    if(resp){
        return 'ok';
    }
}

const getStudent = async function(email){
    const student = await Course.find({email : email});
    return student;
}

const deleteStudent = async function(email){
    const data = {
        email: email
    }
    const deleteOne = await Course.deleteOne(data);
    return true;
}

const sumEntries = async function(){
    
    const cart = await Course.find().countDocuments();
    return cart;
}

const updateStudent = async(email,data)=>{
    const update = await Course.updateOne({email : email}, {$set : data});
    if(update){
        return 'ok';
    }
}

const getAllStudents = async()=>{
    const student = await Course.find({});
    return student;
}

module.exports.checkIfReg = checkIfReg;
module.exports.createNewEntry = createNewEntry;
module.exports.getStudent = getStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.sumEntries = sumEntries;
module.exports.updateStudent =updateStudent;
module.exports.getAllStudents = getAllStudents;
