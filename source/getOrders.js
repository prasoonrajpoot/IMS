const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", async (req, res) => {
    var a = await pool.query(
        "select * from orders"
    );

    // console.log(a.rows);

    res.send(a.rows);


})

module.exports = app;