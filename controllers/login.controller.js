const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js");

const User = require('../models/users.model')

const tokenSecretKey = "pBroGSULZX"
const passwordSecretKey = "IyjjwjVZQG"

const userLogin = async (req,res) => {
  try {
  const user = await User.findOne({number : req.body.number})
  !user && res.status(401).json({message: "Invalid Number"})

  const decodedPassword = CryptoJS.AES.decrypt(user.password, passwordSecretKey).toString(CryptoJS.enc.Utf8)
    
  const isValidPassword = decodedPassword === req.body.password
  !isValidPassword && res.status(401).json({"message":"Invalid Password"})

  const token = jwt.sign({name: user.name, id : user._id}, tokenSecretKey)
  const {password,...rest} = user._doc
  res.json({...rest,token})
    
  } catch (err) {
    console.log(err)
  }

}

module.exports = userLogin