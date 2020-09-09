const User = require("../models/user");
exports.registerUser = (req, res) => {
  const user = new User(req.body);
  user.save((error, usr) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        errorMessage: "Something went wrong while saving user in the database",
      });
    }
    res.json({ user: usr });
  });
};
