const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

// user register post route
router.post("/register", registerUser);

// user login post route
router.post("/login", loginUser);
module.exports = router;
