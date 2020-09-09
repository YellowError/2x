const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type : String,
        lowercase : true,
        trim : true,
        required : "mame is required"
    },
    pseudo:{
        type : String,
        unique : true,
        lowercase : true,
        trim : true,
        required : "pseudo is required"
    },
    email:{
        type : String,
        unique : true,
        lowercase : true,
        trim : true,
        required : "email is required"
    },
    characters:{
        main:{
            type : String
        },
        secondary:[
            {
                type : String
            }
        ]
        
    }

});

module.exports = mongoose.model("player", schema);