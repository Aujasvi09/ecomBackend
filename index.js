const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const connectDb = require('./dbConfig/dbConfig')

const analyticsMiddleware = require('./middleware/analytics')


 // Importing all routers

const allProductsRouter = require('./routes/allProducts.router')
const addProductsToDbRouter = require('./routes/addProductsToDb.router')
const authRouter = require('./routes/auth.router')
const cartRouter = require('./routes/cart.router')
const wishlistRouter = require('./routes/wishlist.router')

const app = express();
app.use(cors());
app.use(express.json());
app.use(analyticsMiddleware)
connectDb()

app.get('/', (req, res) => {
  res.send('Hello from Express App!!!')
})

// Getting all products from DB

app.use("/api/products",allProductsRouter)

// Adding Products to DB

app.use("/api/productsData",addProductsToDbRouter)

// Auth

app.use("/api/auth", authRouter)

// Cart

app.use("/api/cart",cartRouter)

// Wishlist

app.use("/api/wishlist", wishlistRouter)


// Database and Server Connection

mongoose.connection.once("open", () => {
  console.log("Succesfully Connected To Db")
  app.listen(3000, () => {
  console.log('server is up and running')
});
})
