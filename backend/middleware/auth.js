const SECRET_KEY = "itssecretkey";
const jwt = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
    } else {
      res.status(401).json({ message: "handah erhgui hereglegch baina !!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "handah erhgui hereglech baina !!!" });
  }
};
