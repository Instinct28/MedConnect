const userModel = require("../models/userModel");

const getUser = async(req, res) => {
    const id = req.user;
    let success = false;
    try {
        const user = await userModel.findById(id).select("-password");
        if(!user) return res.status(404).json({success, "message" : "User not found"});
        return res.status(200).json({success : true, "message" : "Displaying all users", user});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

const updateUser = async(req, res) => {
    const id = req.user;
    let success = false;
    try {
        const user = await userModel.findByIdAndUpdate(id, {...req.body});
        if(!user) return res.status(404).json({success, "message" : "User not found"});
        return res.status(200).json({success : true, "message" : "User updated", user});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

const deleteUser = async(req, res) => {
    const id = req.user;
    let success = false;
    try {
        const user = await userModel.findByIdAndDelete(id);
        if(!user) return res.status(404).json({success, "message" : "User not found"});
        return res.status(200).json({success : true, "message" : "User deleted", user});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser
};