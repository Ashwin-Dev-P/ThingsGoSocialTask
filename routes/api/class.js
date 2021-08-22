const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const ClassModel = mongoose.model("Class");


//Get all events
router.get('/',async(req,res)=>{
    ClassModel.find((err,docs)=>{
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
    var clas = new ClassModel();
    console.log(req.body)
    clas.name = req.body.name;

    clas.save((err,doc)=>{
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
