


const User = require("../model/model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const { Username, Email, Password, Gender } = req.body;

        const alreadyExist = await User.findOne({ $or:[{Email},{Username}] });
        if (alreadyExist) {
            return res.status(400).json({ status: "failed", error: "Email or username already exists" });
        }

        const hash = await bcrypt.hash(Password, 10);
        const secretkey = "kusuma";
        const token = await jwt.sign({Email}, secretkey, {expiresIn: "2hr"});

        const userstoredata = await User.create({ Username, Email: token, Password: hash, Gender });
        res.status(201).json({ status: "success", message: 'User registered successfully', userstoredata });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "failed", error });
    }
}


const Login = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        if (!Username || !Password) {
            return res.status(400).json({ status: "failed", error: "Username and password are required" });
        }

        const user = await User.findOne({ Username });
        if (!user || !(await bcrypt.compare(Password, user.Password))) {
            return res.status(400).json({ status: "failed", error: "Invalid username or password" });
        }

        const secretkey = "kusuma";
        const token = jwt.sign({Username: user.Username}, secretkey, { expiresIn: "2hr" });

        res.status(200).json({ status: "success", message: "Login successful", token });
        } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "failed", error: "Internal server error" });
      }
}

const Getuserdetails=async(req,res)=>{
    try{
        const users=await User.find()
        return res.status(200)
        .json({data:users})
    }catch(err){
        return res.status(500)
        .json({message:"error",err})
    }
}

module.exports = {
    Signup,
    Login,
    Getuserdetails

}
