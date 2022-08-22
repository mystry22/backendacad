const mongoose = require('mongoose');
require('dotenv').config();
//const testDb = 'mongodb://127.0.0.1/backendacad';
const dbUrl = process.env.DB_CONNECTION;
mongoose.connect(dbUrl, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection ok for Backendacademy');
});