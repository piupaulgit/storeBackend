const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { sendResponseToFrontend } = require("../shared/handleResponse");

// user register controller
module.exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    sendResponseFrontend(res, 201, user, false);
  } catch (err) {
    sendResponseFrontend(res, 400, handleError(err), true);
  }
};

// user login controllers
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    const { _id, role } = user;
    res.status(200).json({ token: token, user: { _id, email, role } });
  } catch (err) {
    sendResponseFrontend(res, 400, handleLoginError(err), true);
  }
};

// user logout controller
module.exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User successfully logged out",
  });
};

// get user by id
exports.getUserbyId = (req,res,next,id) => {
  User.findById(id).exec((err,user) => {
    if(err || !user){
      sendResponseToFrontend(res,400,{},true,"user not found in DB")
    }
    req.profile = user;
    next();
  })
}

// send response to frontend
const sendResponseFrontend = (response, statusCode, info, errorFlag) => {
  return response.status(statusCode).json({
    response: info,
    errorFlag: errorFlag,
  });
};

// handle for login
const handleLoginError = (err) => {
  return err.message;
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
