const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    bloodGroup : {
        type : String,
        required : true
    },
    hospitalName : {
        type : String,
        required : true
    },
    city : {
        type : String
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
});

const patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;