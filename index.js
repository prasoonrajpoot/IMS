const express = require("express");
const bodyParser = require("body-parser")
// import bodyParser from "body-parser";


const addAdminFile = require("./source/addAdmin.js");
const addUserFile = require("./source/addUser.js");
const loginFile = require("./source/login.js");
const fakeFile = require("./source/fakeFile.js");


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/fake", fakeFile);
app.use("/addadmin", addAdminFile);
app.use("/addUser", addUserFile);
app.use("/login", loginFile);


var PORT = 8181;
app.listen(PORT, () => {
  console.log("backend is working at port " + PORT);
});
