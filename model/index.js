const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://AshwinDev:Ashwin@14@mycluster.gi2hp.mongodb.net/ThingsGoSocial?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true } ,(error)=>{
    if(!error){
        console.log("Success connecting to the database");
    }
    else{
        console.log(error);
    }
});



const Class = require("./class.model");
const Society = require("./society.model");
const Student = require("./student.model");