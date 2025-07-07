const express = require("express");
const {
  registerUser,
  loginUser,
  getUserData,
} = require("../controllers/userController");
const userAuthentication = require("../middleware/authUser");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", userAuthentication, getUserData);

module.exports = userRouter;
