const express = require("express");
const port = 8000;
const app = express();
const connect = require("./db");
const router = require("./routes/routes");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

connect();

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("Server is now running on", port);
});
