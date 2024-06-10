const mongoose = require('mongoose');
require("dotenv").config()


const Mongo_uri = process.env.MONGO_URI

const conn = async () => {
  try {
    const response = await mongoose.connect(Mongo_uri)
    if (response) {
      console.log('Connected to DB')
    }
  } catch (error) {
    console.log(error)
  }
}

conn()