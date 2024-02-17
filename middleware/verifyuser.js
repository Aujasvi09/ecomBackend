const jwt = require("jsonwebtoken")

const tokenSecretKey = "pBroGSULZX"

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if(token){
    jwt.verify(token,tokenSecretKey, (err, user) => {
      if(err){
        console.log(err)
        res.status(403).json({"message": "Invalid Token"})
      }
      req.user = user
      next()
    })
  }else{
    res.json({"message": "No Token Sent"})
  }
}

module.exports = verifyUser