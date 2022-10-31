const express = require("express");
const bodyParser = require("body-parser");

const pool = require("../db.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  var todayDate = new Date().toISOString().slice(0, 10);

  var {detail, safeAmount, qty, costprice, sellprice, email} = req.body;
  var type = "create";
  // console.log(email);

  try{
    const newItem = await pool.query(
      "INSERT into Items( detail, safeAmount, qty, costprice, sellprice) values ($1, $2, $3, $4, $5) returning *",
      [detail, safeAmount, qty, costprice, sellprice]
    ); 
//  console.log(newItem);

      const userId = await pool.query("select employee.eid from employee where employee.email = $1", 
      [email]);

      // console.log(newItem.rows[0].itemid);


      var item = newItem.rows[0].itemid;
      var user = userId.rows[0].eid;

      // console.log(typeof(item));
      // console.log(typeof(user));
      // console.log(typeof(Number(qty)));
      // console.log(typeof(todayDate));
      // console.log(typeof(type));

      // console.log(item + "  " +  user + "  "  + todayDate + "  " + type + "  " + Number(qty));
      //  console.log(
      //    typeof(item) +
      //      "  " +
      //      typeof(user) +
      //      "  " +
      //      typeof(todayDate) +
      //      "  " +
      //      typeof(type) +
      //      "  " +
      //      Number(qty)
      //  );

      

      const q = await pool.query(
        "Insert into Orders(itemId, Eid, executedOn, typeof, qty) values($1, $2, $3, $4, $5)" , 
        [item , user, todayDate, type, qty]); 


    res.send("succesfull");
    // console.log(newItem);
  }
  catch(err){
    console.log(err);
    res.send("err");
  }
  

});

module.exports = app;