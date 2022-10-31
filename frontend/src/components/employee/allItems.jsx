import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import axios from 'axios'

function AllItems(props) {

    var [allData, setAllData] = React.useState([]);
    const getData = async () => {
        var res = await axios.get("/getItems");
        for(var i = 0; i < res.data.length; i++){
           res.data[i]["id"] = res.data[i].itemid;
        }
        // console.log("the data now is " + res.data);
        setAllData(res.data);
        // console.log(res.data);
    }

    React.useEffect(() => {
        getData();
    }, [props.refreshData]);


    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "detail", headerName: "Detail", width: 130 },
      { field: "costprice", headerName: "cost price", type: "number", width: 130 },
       { field: "sellprice", headerName: "sell price", type: "number", width: 130 },
      
      {
        field: "qty",
        headerName: "qty",
        type: "number",
        width: 90,
      },
      {
        field: "safeamount",
        headerName: "Safe Amounnt",
        type: "number",
        width: 90,
      },
    ];


    // var allRows = allData.map()

  return (
    <div style={{ height: 400, width: "60%" }}>
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

export default AllItems