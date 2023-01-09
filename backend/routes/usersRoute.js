const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  // createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const { createUser } = require("../controllers/UserController");

router
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
