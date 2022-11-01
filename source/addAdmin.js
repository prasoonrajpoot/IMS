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
    var { admin_ID, admin_SSN } = req.body;
    // admin_ID = 1;
    admin_SSN = 1;
    // console.log(fname + "  " + email + "  " + contact);
    // console.log("we here ");
    const newAdmin = await pool.query(
      "INSERT INTO Admins(admin_SSN) VALUES($1)",
      [admin_SSN ]
    );
      res.json(newAdmin);
    // console.log(newAdmin);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
