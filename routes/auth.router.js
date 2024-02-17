const express = require('express');
const router = express.Router();

const createNewUser = require("../controllers/signup.controller");
const userLogin = require("../controllers/login.controller");

// Signup
router.route("/signup")
    .post(createNewUser)

// Login
router.route("/login")
  .post(userLogin)

  module.exports = router;
