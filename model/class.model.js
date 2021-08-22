const mongoose = require("mongoose");
var ClassSchema = new mongoose.Schema({
    name:{
        type: String,
    }
});
mongoose.model("Class",ClassSchema)