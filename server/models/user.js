const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userName: { type: String, required:true },
  email: { type: String, required:true, unique:true },
  pass: { type: String, required:true},
  isBan: { type:Boolean, default:false},
  prodCount: { type: Number, default: 0 },
  sleepCount: { type: Number, default: 0 },
  yogaCount: { type: Number, default: 0 },
},
{timestamps:true}
)
const model = mongoose.model("user", userSchema)
module.exports = model;