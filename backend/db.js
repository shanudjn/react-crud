const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/postManagerDB",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connection to db successful");
    } else {
      console.log(
        "Error while connecting to database" + JSON.stringify(err, undefined, 2)
      );
    }
  }
);
