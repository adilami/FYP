const mongoose = require("mongoose");

const vidSchema = mongoose.Schema({
  name:String,
  vidUrl:String,
  level:String,
  imgUrl:String,
  description:String,
  time:Number

});
module.exports = mongoose.model("levelSleep", vidSchema);


