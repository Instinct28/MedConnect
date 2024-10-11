const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const {name, email, city, password} = req.body;
    let success = false;
    if(!name || !email || !city || !password) return res.status(400).json({success, "message" : "All fields are mandatory"});
    try {
        let user = await userModel.find({"email" : email});
        if(user.length !== 0) return res.status(409).json({success, "message" : "User already exists"});
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = await userModel.create({name, email, city, password : hashedPassword});
        const token = jwt.sign(user._id.toString(), "Yash@1234");
        res.setHeader("Authorization", token);
        res.cookie("token",token);
        return res.status(200).json({success : true, "message" : "Account Created", token});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    let success = false;
    if(!email || !password) return res.status(400).json({success, "message" : "All fields are mandatory"});
    try {
        const user = await userModel.findOne({"email" : email});
        if(!user) return res.status(401).json({success, "message" : "Credentials not valid"});
        const verify = await bcrypt.compare(password, user.password);
        if(!verify) return res.status(401).json({success, "message" : "Credentials not valid"});
        const token = jwt.sign(user._id.toString(), "Yash@1234");
        res.setHeader("Authorization", token);
        res.cookie("token",token);
        return res.status(200).json({success : true, "message" : "Login Successfull", token});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

module.exports = {
    signup,
    login
}