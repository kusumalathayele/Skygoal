

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  Gender:{
    type:String,
    required:true
  }
})
const User = mongoose.model('UserData', userSchema)
module.exports = User
