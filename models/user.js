const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    encrypted_password: {
      type: String,
      trim: true,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual("password")
  .set(function (plainPassword) {
    this._password = plainPassword;
    this.salt = uuidv4();
    this.encrypted_password = this.securePassword(this._password);
  })
  .get(function () {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encrypted_password;
  },
  securePassword: function (plainPassword) {
    if (!plainPassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", UserSchema);
