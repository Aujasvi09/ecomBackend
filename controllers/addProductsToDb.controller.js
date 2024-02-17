const Products = require('../models/products.model')
const products = require('../db/products');

const addProductsToDb = async (req,res) => {
  try{
      await Products.deleteMany({})
      const productsInDb = await Products.insertMany(products.data)
      res.json({message:"Successfully deleted old products and added new ones"})  
  }
  catch(err){
    console.log(err)
    res.json({message: "Failed to delete old products and add new products"})
  }

}

module.exports = addProductsToDb