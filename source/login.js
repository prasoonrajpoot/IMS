const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/", async (req, res) => {
    // console.log(" we are here ");
    // console.log(req.body);
    var {email, password} = req.body;

    const a = await pool.query(
      "select * from employee where employee.email = $1 and employee.pass = $2",
      [email, password]
    );

    var size = a.rows.length;
    // console.log(a.rows);
    if(size == 1){
        var Eid = a.rows[0].eid;
        // console.log("Eid is " + Eid);
        var b = await pool.query(
            "select * from admins where admins.admin_ssn = $1", [Eid]
            )
        var size2 = b.rows.length;

        if(size2 == 1){
            res.send("admin here");
        }else{
            res.send("employee here");
        }
        // console.log(b.rows);
    }else{
        res.send("error");
    }
    
})


// app.get("/", (req, res) => {
//     res.send("madarrchod");
// })
module.exports = app;