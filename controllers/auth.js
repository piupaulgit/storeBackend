const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// user register controller
module.exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    sendResponseFrontend(res, 201, user);
  } catch (err) {
    sendResponseFrontend(res, 400, handleError(err));
  }
};

// user login controllers
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    //  create token with JWT
    const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);
    // set token in cookie
    res.cookie("token", token);
    const { _id, email, role } = user;
    sendResponseFrontend(res, 200, { token, user: { _id, email, role } });
  } catch (err) {
    // sendResponseFrontend(res, 400, handleError(err));
    console.log("kl");
  }
};

// user logout controller
module.exports.logoutUser = (req, res) => {
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

// send response to frontend
const sendResponseFrontend = (response, statusCode, info) => {
  return response.status(statusCode).json({
    response: info,
  });
};

// handle errors messages
const handleError = (err) => {
  let errorMsgString;
  if (!err.code) {
    let errArr = [];
    Object.values(err.errors).forEach((element) => {
      errArr.push(element.message);
    });
    errorMsgString = errArr.join(", ");
  } else {
    errorMsgString = "Email address is already there is DB";
  }
  return errorMsgString;
};
