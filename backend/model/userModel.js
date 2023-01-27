const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  email: String,
  password: String,
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
