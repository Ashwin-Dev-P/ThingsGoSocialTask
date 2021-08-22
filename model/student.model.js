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
mongoose.model("Student",StudentSchema)