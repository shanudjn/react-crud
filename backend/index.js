require("./db");
const express = require("express");
const bodyParser = require("body-parser");

var postMessageRoutes = require("./controllers/postMessageController");

const app = express();
app.use(bodyParser.json());

app.listen(8000, () => console.log("listening on port 8000..."));

app.use("/postmessages", postMessageRoutes);
