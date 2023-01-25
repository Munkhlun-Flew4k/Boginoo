const { request } = require("http");
const { result } = require("lodash");
const user = require("../model/userModel");
const SECRET_KEY = "itssecretkey";

exports.login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return response
        .status(404)
        .json({ nessage: "email eswel nuuts ug buruu baina" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return response
        .status(404)
        .json({ message: "email eswel nuuts ug buruu baina " });
    }
    const token = jwt.sign({ email: result.email, id: result_id }, SECRET_KEY);
    response.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    response.status(505).jon({ message: "ymr negen zuil buruu bainaa" });
  }
};
