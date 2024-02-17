const express = require('express');
const router = express.Router();

const addProductsToDb = require("../controllers/addProductsToDb.controller")

router.route("/")
    .post(addProductsToDb)

module.exports = router;

