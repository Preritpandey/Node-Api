const mongoose = require("mongoose");
uri =
  "mongodb+srv://pandeyprerit45:tPtGkyRDOHXBy5oy@cluster0.a36e3tc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  console.log("connected to mongoose");
  return mongoose.connect(uri);
};
module.exports = connectDB;
