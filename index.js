const express = require("express");
const bodyParser = require("body-parser")
// import bodyParser from "body-parser";


const addAdminFile = require("./source/addAdmin.js");
const addUserFile = require("./source/addUser.js");
const loginFile = require("./source/login.js");
const fakeFile = require("./source/fakeFile.js");
const addItemFile = require("./source/addItems.js");
const getAllItemsFile = require("./source/getAllItems.js");
const getAllEmployeeFile = require("./source/getEmpl.js");
const execOrdersFile = require("./source/orders.js");
const getUnsafeList = require("./source/getUnsafeItems.js");
const getOrderFile = require("./source/getOrders.js");
const getProfitFile = require("./source/getProfit.js");
const getChartsDataFile = require("./source/getChartData.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/fake", fakeFile);
app.use("/addadmin", addAdminFile);
app.use("/addUser", addUserFile);
app.use("/login", loginFile);
app.use("/addItems", addItemFile);
app.use("/getItems", getAllItemsFile);
app.use("/getEmployee",getAllEmployeeFile);
app.use("/doOrder", execOrdersFile);
app.use("/getUnsafeList", getUnsafeList);
app.use("/getOrders", getOrderFile);
app.use("/getProfit", getProfitFile);
app.use("/getChartData", getChartsDataFile);

var PORT = 8181;
app.listen(PORT, () => {
  console.log("backend is working at port " + PORT);
});
