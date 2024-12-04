const userModel = require("../Models/userModel");

const registerUser = (req, res) => {
  res.send("Register");
  console.log("Register");
};

module.exports = { registerUser };
