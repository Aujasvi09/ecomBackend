const Product = require('../models/products.model')

const filterCategory = async (req,res,next) => {
    const categorySearched = req.query.category
    const productsByCategory = await Product.find({category : categorySearched})
    res.json(productsByCategory)
}

module.exports = filterCategory