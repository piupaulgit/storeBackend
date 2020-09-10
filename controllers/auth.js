const User = require("../models/user");
const jwt = require("jsonwebtoken");

// user register controller
exports.registerUser = (req, res) => {
  const user = new User(req.body);
  user.save((error, usr) => {
    if (error) {
      errorFunc(
        res,
        400,
        "Something went wrong while saving user in the Database"
      );
    }
    res.json({ user: usr });
  });
};

// user login controllers
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      errorFunc(res, 401, "No user there with this email in db");
    } else {
      if (!user.authenticate(password)) {
        errorFunc(res, 400, "Password does not match with the given email Id");
      } else {
        // create token with JWT
        const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);
        // set token in cookie
        res.cookie("token", token);
        // constructing response for frontend
        const { _id, email, role } = user;
        res.json({ token, user: { _id, email, role } });
      }
    }
  });
};

// user logout controller
exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User successfully logged out",
  });
};

// common functions
function errorFunc(response, statusCode, msg) {
  return response.status(statusCode).json({
    message: msg,
  });
}
