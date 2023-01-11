const { model, Schema } = require("mongoose");

const LinkSchema = new Schema({
  originalURL: String,
  shortURL: String,
});

const LinkModel = model("Link", LinkSchema);
//links

module.exports = LinkModel;
