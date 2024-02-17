const express = require('express')
const router = express.Router()

const wishlistControllers = require("../controllers/wishlist.controller")
const verifyUser = require("../middleware/verifyuser")


const {createWishlist, deleteWishlist, getAllWishlist} = wishlistControllers
  
router.route("/")
  .post(verifyUser,createWishlist)

router.route("/:id")
  .delete(verifyUser,deleteWishlist)

router.route("/")
  .get(verifyUser,getAllWishlist)

module.exports = router