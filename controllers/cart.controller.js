const User = require('../models/users.model')


const addItemToCart = async (req,res) => {
  try{
    const currUser = await User.findById(req.user.id)
    req.body.product ? currUser.cart = [...currUser.cart, req.body.product] : res.status(400).json({"message": "Invalid format of request"})
    await currUser.save()
    res.status(201).json(currUser.cart)
  }catch(err){
    console.log(err)
    res.json({message: "Failed To Add To Cart"})
  }
}

const deleteCartItem = async (req,res) => {
  try {
    const currUser = await User.findById(req.user.id)
    const productIdToDelete = req.params.id
    const filteredCart = currUser.cart.filter((prod) => prod._id.toString() !== productIdToDelete)
    currUser.cart = filteredCart
    await currUser.save()
    res.status(200).json(filteredCart)
  } catch (error) {
    console.log(error)
    res.json({"message":"Failed To Delete"})
  }
}

const getAllCart = async (req,res) => {
  try {
    const currUser = await User.findById(req.user.id)
    res.status(200).json(currUser.cart)
    
  } catch (error) {
    console.log(error)
   res.json({"message": "Cannot get Cart data"}) 
  }
}


module.exports = {addItemToCart, deleteCartItem, getAllCart}