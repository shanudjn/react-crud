//require mongoose
const mongoose = require("mongoose");

var PostMessage = mongoose.model("PostMessage", {
  title: String,
  message: String,
}, 'postMessages');

mongoose.set('useFindAndModify', false);

module.exports = { PostMessage };
