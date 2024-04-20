

const joi=require("joi")
const uservalidation=(req,res,next)=>{
 const Schema=joi.object({
    Username:joi.string().min(4).max(50).required(),
    Email:joi.string().email().required(),
    Password:joi.string().min(8).alphanum().required(),
    Gender:joi.string().required()
 })
  const {error,value}=Schema.validate(req.body)
  if(error){
return res.status(400).json({message:"Bad request",error})
  }
  next()
}


const loginvalidation=(req,res,next)=>{
    const schema=joi.object({
        Password:joi.string().min(8).alphanum().required(),
        Username:joi.string().min(4).max(50).required()
    })
    const{error,value}=schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"Bad request",error})
    }
    next()
}
module.exports={
    uservalidation,
    loginvalidation
}
