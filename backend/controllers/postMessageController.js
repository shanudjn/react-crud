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

router.post("/", (req, res) => {
  let newRecord = {
    title: req.body.title,
    message: req.body.message,
  };
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "error while retirving all records" + JSON.stringify(err, undefined, 2)
      );
  });
});

router.put("/:id", (req, res) => {
  let newRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  postMessage.findOneAndUpdate(
    req.params.id,{ $set: newRecord },(err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "error while retirving all records" +
            JSON.stringify(err, undefined, 2)
        );
    }
  );
});
module.exports = router;
