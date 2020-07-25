const express = require("express");
let router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId

var { PostMessage } = require("../models/postMessage");
const { ObjectId } = require("mongodb");

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
  let newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "error while retirving all records" + JSON.stringify(err, undefined, 2)
      );
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send('No record with given id' + req.params.id);
  }

  let newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });

  postMessage.findOneAndUpdate(
    req.params.id, { $set: newRecord }, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("error while retirving all records" + JSON.stringify(err, undefined, 2))
    });
});

router.delete('/:id', (req, docs) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send('No record with given id' + req.params.id);
  }
  postMessage.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('error while deleting a record: ' + JSON.stringify(err, undefined, 2))
  });
})

module.exports = router;
