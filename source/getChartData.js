const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", async (req, res) => {
    // count of safe items
    var a = await pool.query(
        "select count(*) from items where items.qty >= items.safeAmount"
    );

    var b = await pool.query(
        "select count(*) from items where items.qty < items.safeAmount"
    );

    // console.log(a.rows[0].count);
    // console.log(b.rows[0].count);

    res.send([a.rows[0].count, b.rows[0].count]);
})


module.exports = app;