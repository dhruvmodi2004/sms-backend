const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String
    },

    phone:{
        type:String
    },

    course:{
        type:String
    },

    image:{
        type:String
    }

});


module.exports = mongoose.model("Student", studentSchema);