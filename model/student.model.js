const mongoose = require("mongoose");
var StudentSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    contact:{
        type: String,
    },
    subjects:[
        {
            type: String,
        }
    ],
    class:{
        type: String,
    },
    society:[
        {
            type: String,
        }
    ],
    year:{
        type: Number ,
    }

});
mongoose.model("Student",StudentSchema)





/*

var StudentSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    contact:{
        type: String,
    },
    subjects:[
        {
            name: String,
        }
    ],
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    society:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Society'
        }
    ],
    year:{
        type: Number ,
    }

});


*/