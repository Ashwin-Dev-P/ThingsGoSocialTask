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

//no.of students who have registered today for theatre society from class science
router.get('/aggregate',async(req,res)=>{
StudentModel.aggregate([
        { "$match": { "class": "science","society": "theatre" } },
    ],
    function( err, data ) {
  
      if ( err )
        throw err;
  
      //console.log( JSON.stringify( data, undefined, 2 ) );
      res.json(data);
  
    }
  );
})

//students above the age 15, who have registered for swimming society in arts and science class
router.get('/year',async(req,res)=>{
    StudentModel.aggregate([
            
            {  "$match": {  "year" : {$gt: 15} ,  "society":"swimming", "class":"arts and science"  } },

        ],
        function( err, data ) {
      
          if ( err )
            throw err;
      
          //console.log( JSON.stringify( data, undefined, 2 ) );
          res.json(data);
      
        }
      );
    })



module.exports = router;
