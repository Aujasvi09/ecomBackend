const User = require('../models/users.model')


const createWishlist = async (req,res) => {
  try{
    const currUser = await User.findById(req.user.id)
    req.body.product ? currUser.wishlist = [...currUser.wishlist, req.body.product] : res.status(400).json({"message": "Invalid format of request"})
    await currUser.save()
    res.status(201).json(currUser)
  }catch(err){
    console.log(err)
    res.json({message: "Failed To Add To Wishlist"})
  }
}

const deleteWishlist = async (req,res) => {
  try {
    const currUser = await User.findById(req.user.id)
    const productIdToDelete = req.params.id
    const filteredWishlist = currUser.wishlist.filter((prod) => prod._id.toString() !== productIdToDelete)
    currUser.wishlist = filteredWishlist
    await currUser.save()
    res.status(200).json(filteredWishlist)
  } catch (error) {
    console.log(error)
    res.json({"message":"Failed To Delete"})
  }
}

const getAllWishlist = async (req,res) => {
  try {
    const currUser = await User.findById(req.user.id)
    res.status(200).json(currUser.wishlist)
    
  } catch (error) {
    console.log(error)
   res.json({"message": "Cannot get Wishlist data"}) 
  }
}


module.exports = {createWishlist, deleteWishlist, getAllWishlist}