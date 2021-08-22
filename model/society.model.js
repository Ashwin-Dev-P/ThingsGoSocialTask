const mongoose = require("mongoose");
var SocietySchema = new mongoose.Schema({
    name:{
        type: String,
    }
});
mongoose.model("Society",SocietySchema)