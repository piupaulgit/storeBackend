const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { registerUser, loginUser, logoutUser } = require("../controllers/user");
const router = express.Router();

// user register post route
router.post("/register", registerUser);

// user login post route
router.post("/login", loginUser);

//sign out get route
router.get("/logout", logoutUser);




module.exports = router;
