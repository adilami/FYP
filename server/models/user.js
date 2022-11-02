const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userName: { type: String, required:true },
  email: { type: String, required:true, unique:true },
  pass: { type: String, required:true}
})
const model = mongoose.model("user", userSchema)
module.exports = model;