const express = require("express");
const userRouter = express.Router();
const { login } = require("../controller/userController");

router.get("/", login);

module.exports = userRouter;
