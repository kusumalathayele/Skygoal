

const express=require("express")
const router=express.Router()
const controller=require("../controller/controller.js")
const {uservalidation,loginvalidation}=require("../middlewares/validate.js")
const auth=require("../middlewares/auth.js")

router.post("/", uservalidation,controller.Signup)
router.post("/login",loginvalidation,controller.Login)
router.get("/get",auth,controller.Getuserdetails)

module.exports=router