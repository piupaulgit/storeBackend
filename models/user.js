const mongoose = require("mongoose");

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

UserSchema.method = {
  securePassword: function (plainPassword) {
    if (!plainPassword) return "";
    try {
      const hashPassword = crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");

      return hashPassword;
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", UserSchema);
