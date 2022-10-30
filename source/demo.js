const express = require("express");
const bodyParser = require("body-parser");

var app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {});

module.exports = app;
