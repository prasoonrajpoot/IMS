const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get("/", (req,res)=> {
//     res.send("this is test");
// })

app.get("/", async (req, res) => {
  try {
    console.log("we here ");
   var fname = "admin";
   var email =  "admin@gmail.com";
   var EId = 344;
   var  pass = "admin";
  var addr = "fdfadfads";
    // console.log(fname + "  " + email + "  " + contact);

    // console.log("we here ");
    const newAdmin = await pool.query(
      "INSERT INTO Employee( fname, email, pass, addr) VALUES($1, $2, $3, $4) returning *",
      [fname, email, pass, addr]
    );
    res.json(newAdmin);
    // console.log(newAdmin);
  } catch (err) {
    console.log(err);
  }
});


module.exports = app;
