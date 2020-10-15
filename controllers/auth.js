
const expressJwt = require('express-jwt');




// functions for authentications
// middlewares ========================
// isSignedIn
exports.isSignedIn = expressJwt({
    secret: process.env.SECRETKEY,
    userProperty: "auth",
    algorithms: ["HS256"]
  })
  // =================================
  
  // isAuthenticated
  exports.isAuthenticated = (req,res,next) => {
    next();
  }
  // ====================================
  
  
  // isAdmin
  exports.isAdmin = (req,res,next) => {
    next();
  }