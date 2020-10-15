const express = require("express");
const { registerUser, loginUser, logoutUser, isSignedIn } = require("../controllers/auth");
const router = express.Router();

// user register post route
router.post("/register", registerUser);

// user login post route
router.post("/login", loginUser);

//sign out get route
router.get("/logout", logoutUser);


// test with isSignedIn
router.get('/auth-test', isSignedIn, (req, res) => {
    res.status(200).json({
        msg: "success"
    })
})

module.exports = router;
