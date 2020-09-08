const express = require("express");
const { registerUser } = require("../controllers/auth");
const router = express.Router();

// user register post route
router.get("/register", registerUser);
module.exports = router;
