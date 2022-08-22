const Admin = require('../model_schema/Admin_Schema');


const createNewAdmin = async function(data){
    const entry = new Admin(data);
    const resp = await entry.save();
    if(resp){
        return 'ok';
    }
}

const getAdmin = async function(email){
    const student = await Admin.findOne({email : email});
    return student;
}


const getAllAdmin = async()=>{
    const admin = await Admin.find({});
    return admin;
}

module.exports.createNewAdmin = createNewAdmin;
module.exports.getAdmin = getAdmin;
module.exports.getAllAdmin = getAllAdmin;

