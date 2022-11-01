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
    var { fname, email, pass, addr, isAdmin } = req.body;
    // console.log(fname + "  " + email + "  " + contact);
    // console.log("we here ");
    const newUser = await pool.query(
      "INSERT INTO employee(fname, email, pass, addr) VALUES($1, $2, $3, $4) returning *",
      [fname, email,pass , addr]
    );
      // console.log(newUser);
    if(isAdmin == true){
      // console.log(" we here in sided ")
      const newAdmin = await pool.query(
        "Insert into admins(admin_ssn) values ($1)", 
        [newUser.rows[0].eid]
      )

      // console.log(newAdmin)
    }


    res.send("succesful")
    // console.log(newUser);
  } catch (err) {
    console.log(err);
    res.send("error");
  }


});

module.exports = app;
