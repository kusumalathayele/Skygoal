
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    if (!req.headers["authorization"]) { 
        return res.status(403)
            .json({ message: "Token is required" });
    }

    const token = req.headers["authorization"].split(" ")[1]; 

    var secretkey = "kusuma";
    try {
        const decoded = jwt.verify(token, secretkey); 
        next(); 
    } catch (err) {
        return res.status(403)
            .json({ message: "Token is not valid, or it is expired" });
    }
};

module.exports = authentication;
