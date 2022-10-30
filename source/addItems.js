const express = require("express");
const bodyParser = require("body-parser");

const pool = require("../db.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {

  var {detail, safeAmount, qty, price} = req.body;

  try{
    const newItem = await pool.query(
   "INSERT into Items( detail, safeAmount, qty, price) values ($1, $2, $3, $4)",
   [detail, safeAmount, qty, price]
 );
        res.send("succesfull");
 console.log(newItem);
  }
  catch(err){
    console.log(err);
    res.send("err");
  }
  

});

module.exports = app;