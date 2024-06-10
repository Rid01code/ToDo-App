const express = require('express')
const router = express.Router()
const userModel = require('../Models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const authenticateToken = require('./Auth')

router.use(express.json())

//sign In

router.post('/signIn', async (req, res) => {
  try {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const existingEmail = await userModel.findOne({email: email})
    const existingPhone = await userModel.findOne({ phone: phone })
    
    if (existingEmail) {
      return res.status(400).json({message: "Email all ready exist"})
    }
    if (existingPhone) {
      return res.status(400).json({message:"Number all ready exist"})
    }

    const newUser = new userModel({
    name: name,
    email: email,
    phone: phone,
    password: hashPassword
    })
    await newUser.save()
    return res.status(200).json({ message: "Signed In successfully" })
  } catch (error) {
    console.log(error)
    res.status(400).json({message:"Internal server Error"})
  }
  
})

router.get('/getUserInfo',authenticateToken, async (req, res) => {
  try {
    const userId = req.headers.id
    const user = await userModel.findById(userId)
    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }
    const userInfo = {
      name: user.name,
      email: user.email,
      phone: user.phone
    };
    res.status(200).json({ userInfo }) 
  } catch (error) {
    res.status(500).json({message:'Internal server error'})
  }
})


//log In
router.post('/logIn', async (req, res) => {
  const { phone, email, password } = req.body;

  const existingEmail = await userModel.findOne({ email: email });

  if (!existingEmail) {
    return res.status(400).json({ message: "Email does not found , Please Sign In" })
  }

  const isValidPassword = await bcrypt.compare(password, existingEmail.password);
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const authClaims = [{ phone: phone, email: email }, { jti: jwt.sign({}, "Iamrid150") }];
  const token = jwt.sign({ authClaims }, "Iamrid150", { expiresIn: "1d" });
  res.status(200).json({ id: existingEmail._id, token: token });
});

module.exports = router
