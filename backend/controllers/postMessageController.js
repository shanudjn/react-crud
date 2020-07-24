const express = require("express");
let router = express.Router();

var { PostMessage } = require("../models/postMessage");

router.get("/", (req, res) => {
  PostMessage.find((err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "error while retirving all records" + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
