//Handle request

const express = require("express");
const router = express.Router();
const { createBoginoo, getLinks, getID } = require("../controller/controller");

const { auth } = require("../auth/auth");

router.post("/", createBoginoo).get("/", getLinks).get("/:id", getID);

module.exports = router;
