const mongoose = require("mongoose");

const vidSchema = mongoose.Schema({
  name:String,
  imgURL:String,
  vidUrl:String
});
module.exports = mongoose.model("videoProd", vidSchema);


