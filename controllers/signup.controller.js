const User = require('../models/users.model')
const CryptoJS = require("crypto-js");

const passwordSecretKey = "IyjjwjVZQG"

const createNewUser = async (req, res) => {
  try {
    const user = new User({
      name : req.body.name,
      email : req.body.email,
      number: req.body.number,
      password: CryptoJS.AES.encrypt(req.body.password, passwordSecretKey).toString()  
    })
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    console.log("Failed To create ",err)
  }
}

module.exports = createNewUser