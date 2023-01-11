//Handle request

const express = require("express");
const router = express.Router();
const { createBoginoo, getBoginoo } = require("../controller/controller");

router.post("/", createBoginoo);
// .get("/:id", getBoginoo);

module.exports = router;
