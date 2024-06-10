const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true,
    trim: true,  
    lowercase: true, 
    validate: {
      validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),}   
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: [{
    type: mongoose.Types.ObjectId,
    ref: "todoModel"
  }]
})

const userModel = mongoose.model('userModel', userSchema)
module.exports = userModel