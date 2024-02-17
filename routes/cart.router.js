const express = require('express')
const router = express.Router()

const cartControllers = require("../controllers/cart.controller")
const verifyUser = require("../middleware/verifyuser")


const {addItemToCart, deleteCartItem, getAllCart} = cartControllers
  
router.route("/")
  .post(verifyUser,addItemToCart)

router.route("/:id")
  .delete(verifyUser,deleteCartItem)

router.route("/")
  .get(verifyUser,getAllCart)

module.exports = router