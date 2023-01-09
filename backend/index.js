const connect = require("./helper/db");
connect();

const express = require("express");
const user = require("./routes/usersRoute");
const port = 8000;
const app = express();

app.use(express.json());
app.use("/users", user);

app.get("/hello", (req, res) => {
  res.send("Hello Express Js");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
