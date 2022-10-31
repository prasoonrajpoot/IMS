const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    console.log("we here");
    var ans = await pool.query("select * from items where items.qty <= items.safeAmount");
    // console.log(ans.rows);
    res.send(ans.rows);
  } catch (err) {
    console.log(err);
    res.send("err");
  }
});

module.exports = app;
