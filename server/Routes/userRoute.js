const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/:userId", getUser);
router.get("/", getAllUsers);

module.exports = router;
