//Handle request

const express = require("express");
const router = express.Router();
const { createBoginoo, getLinks } = require("../controller/controller");

router.post("/", createBoginoo).get("/", getLinks);

module.exports = router;
