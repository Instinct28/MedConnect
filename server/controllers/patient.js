const patientModel = require('../models/patientModel');

const addPatient = async(req, res) => {
    const id = req.user;
    const {name, email, phone, bloodGroup, hospitalName, city} = req.body;
    let success = false;
    if(!name || !email || !phone || !bloodGroup || !hospitalName || !city) return res.staus(401).json({success, "message" : "All fields are mandatory"});
    try {
        const patient = await patientModel.create({name, email, phone, bloodGroup, hospitalName, city, createdBy : id});
        return res.status(201).json({success : true, "message" : "Patient added successfully", patient});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error", error});
    }
}

const updatePatient = async(req, res) => {
    const id = req.body.id;
    let success = false;
    try {
        const patient = await patientModel.findByIdAndUpdate(id, {...req.body});
        if(!patient) return res.status(404).json({success, "message" : "Patient not found"});
        return res.status(201).json({success : true, "message" : "Patient updated successfully", patient});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

const deletePatient = async(req, res) => {
    const id = req.body.id;
    let success = false;
    try {
        const patient = await patientModel.findByIdAndDelete(id);
        if(!patient) return res.status(404).json({success, "message" : "Patient not found"});
        return res.status(201).json({success : true, "message" : "Patient deleted successfully", patient});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

module.exports = {
    addPatient,
    updatePatient,
    deletePatient,

}