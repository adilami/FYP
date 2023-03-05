const mongoose = require("mongoose");

const vidSchema = mongoose.Schema({
  name:String,
  vidUrl:String,
  description:String
});
module.exports = mongoose.model("videoProd", vidSchema);


