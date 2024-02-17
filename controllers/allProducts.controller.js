const Products = require('../models/products.model')


const getAllProducts = async (req,res) => {
  try{
    const allProducts = await Products.find({})
    allProducts ? res.json(allProducts) :       
    res.status(404).json({message: "No Products Found"})
  }catch(err){
    console.log(err)
  } 
}

module.exports = getAllProducts