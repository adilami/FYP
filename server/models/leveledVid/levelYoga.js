const mongoose = require("mongoose");

const vidSchema = mongoose.Schema({
  name:String,
  vidUrl:String,
  level:String,
  description:String
});
module.exports = mongoose.model("levelYoga", vidSchema);


