const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");
const { application } = require("express");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", async (req, res) => {
    var a = await pool.query(
      "select Employee.fname , sum( (items.sellprice - items.costprice)*orders.qty) as profit, Employee.eid from orders, items, employee where employee.eid = orders.eid and orders.itemid = items.itemid and orders.typeof = 'remove'  group by employee.eid;"
    );

    res.send(a.rows);

}) 

module.exports = app;