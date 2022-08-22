const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const db_conn = require('./config/db');
const cors = require('cors');
const students = require('./routes/students');
const auth = require('./routes/auth');



app.use(cors());
app.use(express.json());
app.use(fileupload());

//route
app.use('/api/students',students);
app.use('/api/auth',auth);



const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT);
})