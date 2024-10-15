const jwt = require("jsonwebtoken");

const islogin = async(req, res, next) => {
    const token = req.headers.token;
    if(!token){
        return res.status(401).json({"message":"Token is not valid"});
    }
    try {
        const data = await jwt.verify(token, "Yash@1234");
        req.user = data;
        next();
    } catch (error) {
        return res.status(401).json({"message":"Token is not valid"});
    }
}

module.exports = islogin;