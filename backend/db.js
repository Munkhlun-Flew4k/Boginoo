const mongoose = require("mongoose");
const uri = "mongodb+srv://Flew4k:Flew4k0213@cluster0.qmtq56c.mongodb.net/test";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
