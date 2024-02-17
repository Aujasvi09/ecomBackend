const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  
  img: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  sizes: [{
    _id: false,
    id: { type: Number, required: true },
    size: { type: String, required: true }
  }],
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  discount: { type: Number, required: true },
  rating: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  isProductInExpressDelivery: { type: Boolean, required: true },
  isTrending: { type: Boolean, required: true },
  isExchangeAvailable: { type: Boolean, required: true }
},{
  timestamps: true
},{
  _id : false
});

// Create the model
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;