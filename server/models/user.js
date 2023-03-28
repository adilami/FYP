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
  SLevel1: { type:Boolean, default:true},
  PLevel1: { type:Boolean, default:true},
  ALevel1: { type:Boolean, default:true},
  SLevel2: { type:Boolean, default:false},
  PLevel2: { type:Boolean, default:false},
  ALevel2: { type:Boolean, default:false},
  SLevel3: { type:Boolean, default:false},
  PLevel3: { type:Boolean, default:false},
  ALevel3: { type:Boolean, default:false},
},
{timestamps:true}
)
const model = mongoose.model("user", userSchema)
module.exports = model;