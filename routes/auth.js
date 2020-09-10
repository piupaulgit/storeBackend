const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth");
const router = express.Router();

// user register post route
router.post("/register", registerUser);

// user login post route
router.post("/login", loginUser);

//sign out get route
router.get("/logout", logoutUser);

module.exports = router;
