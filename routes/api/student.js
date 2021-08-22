const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const StudentModel = mongoose.model("Student");
var request = require('request');




//Get all events
router.get('/',async(req,res)=>{
    StudentModel.find((err,docs)=>{
        if(!err){
            console.log(docs);
            res.setHeader('Content-Type', 'application/json');
            res.json(docs);
        }
        else{

            res.json({ message: "Error collecting documents from collection", status:"500" });
        }
    }).lean();
})

//Post a society
router.post('/',(req,res)=>{
    var student = new StudentModel();
    console.log(req.body)
    student.name = req.body.name;
    student.contact = req.body.contact;
    student.class = req.body.class ;
    student.society = req.body.society ;
    student.subjects = req.body.subjects ;
    student.year = req.body.year ;

    
    student.save((err,doc)=>{
        if(!err){
            res.json({ message : "success" ,status: "OK"  });
        }
        else{
            console.log(err);
            res.json({ message : "error" ,status: "500"  });
        }
    })
})



module.exports = router;
