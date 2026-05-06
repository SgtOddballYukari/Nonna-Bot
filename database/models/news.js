const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  source: String,
  lastLink: String
});

module.exports = mongoose.model("News", schema);
