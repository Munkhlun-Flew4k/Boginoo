const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  email: String,
  password: String,
});

const userModel = model("Link", userSchema);
//links

module.exports = userModel;
