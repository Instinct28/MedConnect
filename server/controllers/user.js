const userModel = require("../models/userModel");

const getUser = async(req, res) => {
    const id = req.user;
    let success = false;
    try {
        const user = await userModel.findById(id).select("-password");
        if(!user) return res.status(404).json({success, "message" : "User not found"});
        return res.status(200).json({success : true, user});
    } catch (error) {
        return res.status(500).json({success, "message" : "Internal Server Error"});
    }
}

module.exports = {
    getUser
};