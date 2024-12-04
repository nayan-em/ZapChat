const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { typeof: String, required: true },
    email: { typeof: String, required: true, unique: true },
    password: { typeof: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
