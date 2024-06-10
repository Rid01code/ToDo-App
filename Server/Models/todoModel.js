const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    require : true
  },
  date: {
    type: Date,
    require : true
  },
  done: {
    type: Boolean,
    default: false
  }
},{timestamps: true})

const todoModel = mongoose.model('todoModel', todoSchema)

module.exports = todoModel