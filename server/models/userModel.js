const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String
    }
});

const userModel = model("user", userSchema);

module.exports = userModel;