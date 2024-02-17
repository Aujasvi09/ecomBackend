const express = require('express');
const router = express.Router();

const getAllProducts = require("../controllers/allProducts.controller");

router.route("/")
    .get(getAllProducts)

module.exports = router;