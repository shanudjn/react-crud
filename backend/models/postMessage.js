//require mongoose
const mongoose = require("mongoose");

var PostMessage = mongoose.model("PostMessage", {
  title: String,
  message: String,
});
