
const expressJwt = require('express-jwt');
const { sendResponseToFrontend } = require('../shared/handleResponse');




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
      const isAuhenticUser = req.profile && req.auth && req.profile._id == req.auth._id;
      if(!isAuhenticUser) {
          sendResponseToFrontend(res, 403, {}, true, "access denied");
      }
    next();
  }
  // ====================================
  
  
  // isAdmin
  exports.isAdmin = (req,res,next) => {
    if(req.profile.role !== 0 ){
        sendResponseToFrontend(res, 403, {}, true, "you are not admin");
    }
    next();
  }