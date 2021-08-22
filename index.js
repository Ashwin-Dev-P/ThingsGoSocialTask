const express = require('express');
const app = express();
const path = require('path');
var request = require('request');
const connection = require("./model");
const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//To enable CORS

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");  //  Specify the domain name or "*"
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,PATCH, DELETE, OPTIONS');
    next();
});


//Set static folder
app.use(express.static(path.join(__dirname,'public')));


//ROUTES

app.get('/',(req,res) => {
    //res.sendFile(path.join(__dirname,'views','index.html'))
    res.send("Home page");
})

//Class API routes
app.use('/api/class',require('./routes/api/class'))

//Class API routes
app.use('/api/society',require('./routes/api/society'))


//Class API routes
app.use('/api/student',require('./routes/api/student'))


















const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on  port ${PORT}`);
});