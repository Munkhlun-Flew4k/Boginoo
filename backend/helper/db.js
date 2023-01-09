const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Flew4k:Flew4k0213@cluster0.qmtq56c.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error found", error);
  }
};

module.exports = connect;
