const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/", (req, res) => {
    console.log(" we are here ");
    console.log(req.body);
    res.send("response recieved");
})


app.get("/", (req, res) => {
    res.send("madarrchod");
})
module.exports = app;