const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  count: { type: Number, default: 0 },
});

module.exports = mongoose.model("counterProd", counterSchema);
