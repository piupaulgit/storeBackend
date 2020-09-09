const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    // encry_password: {
    //   type: String,
    //   required: true,
    // },
    // salt: String,
    // role: {
    //   type: Number,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
