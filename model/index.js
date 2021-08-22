const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Intern", { useNewUrlParser: true,useUnifiedTopology: true } ,(error)=>{
    if(!error){
        console.log("Success connecting to the database");
    }
    else{
        console.log("Error connecting to the database");
    }
});


const Class = require("./class.model");
const Society = require("./society.model");
const Student = require("./student.model");