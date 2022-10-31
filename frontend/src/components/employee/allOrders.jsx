import React from 'react'

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
function AllOrders(props) {
  var [allData, setAllData] = React.useState([]);
  const getData = async () => {
    var res = await axios.get("/getOrders");
    console.log()
    for (var i = 0; i < res.data.length; i++) {
      res.data[i]["id"] = res.data[i].order_id;
    }
    console.log("the data now is " + res.data);
    setAllData(res.data);
    console.log(res.data);
  };

  React.useEffect(() => {
    getData();
  }, [props.refreshData]);

  const columns = [
    { field: "id", headerName: "id", width: 70 },
    { field: "itemid", headerName: "Item Id", width: 70 },
    { field: "eid", headerName: "Executed by", width: 130 },
    {
      field: "executedon",
      headerName: "Executed On",
      type: "number",
      width: 130,
    },
    {
      field: "typeof",
      headerName: "Type of ",
      type: "text",
      width: 90,
    },
    {
      field: "qty",
      headerName: "qty",
      type: "number",
      width: 90,
    },
  ];

  // var allRows = allData.map()

  return (
    <div style={{ height: 400, width: "60%" }}>
        <h3> All Orders</h3>
      <DataGrid
        rows={allData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default AllOrders