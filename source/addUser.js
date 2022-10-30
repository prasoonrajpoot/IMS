const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req,res)=> {
//     res.send("this is test");
// })

app.post("/", async (req, res) => {
  try {
    var { fname, email, contact, pass } = req.body;
    console.log(fname + "  " + email + "  " + contact);
    console.log("we here ");
    const newUser = await pool.query(
      "INSERT INTO users(fname, email, contact, pass) VALUES($1, $2, $3, $4) returning *",
      [fname, email, contact, pass]
    );
    res.json(newUser);
    console.log(newUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
