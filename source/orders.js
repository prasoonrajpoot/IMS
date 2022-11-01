const express = require("express");
const bodyParser = require("body-parser");

const pool = require("../db.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/", async (req,res)=> {
    var {ItemId, qty, type, email} = req.body;
    // console.log(email);
      var todayDate = new Date().toISOString().slice(0, 10);


    var cur = await pool.query(
        "select * from items where Items.ItemId = $1", 
        [ItemId]
    );

    // console.log(cur.rows);


       const userId = await pool.query(
         "select employee.eid from employee where employee.email = $1",
         [email]
       );

      //  console.log(userId);

      var user = userId.rows[0].eid;

    
    if (type == "-" && cur.rows[0].qty < Number(qty)) {
      res.send("aukat se jayda");
    }


    if(type == "+"){
        var newQty = cur.rows[0].qty + Number(qty);
        // console.log(newQty);
        // console.log(typeof(newQty));
        // console.log(typeof(cur.rows[0].qty));
        // console.log(typeof(qty));
        // console.log(" we in addition");
        var a = await pool.query(
            "update items set qty = $1 where itemid = $2",
            [newQty, ItemId]
            );


        const q = await pool.query(
          "Insert into Orders(itemId, Eid, executedOn, typeof, qty) values($1, $2, $3, $4, $5)",
          [ItemId, user, todayDate, "add", qty]
        ); 
        res.send("succesfull");
        
    }

    if (type == "-" && cur.rows[0].qty >= Number(qty)) {
      var newQty = cur.rows[0].qty - Number(qty);
      var a = await pool.query("update items set qty = $1 where itemid = $2", [
        newQty,
        ItemId,
      ]);

      const q = await pool.query(
        "Insert into Orders(itemId, Eid, executedOn, typeof, qty) values($1, $2, $3, $4, $5)",
        [ItemId, user, todayDate, "remove", qty]
      ); 
      res.send("succesfull");
    }

})

module.exports = app;