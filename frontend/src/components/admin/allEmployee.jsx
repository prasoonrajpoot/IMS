import React from 'react'
import axios from "axios";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";


function AllEmployee() {

    var [allEmployee, setAllEmployee] = React.useState([]);

    const getData = async () => {
        var res= await axios.get("/getEmployee");
        for (var i = 0; i < res.data.length; i++) {
          res.data[i]["id"] = res.data[i].eid;
        }
        console.log(res.data);
        setAllEmployee(res.data);
    }

    React.useEffect(() => {
        getData();
    }, []);

    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "fname", headerName: "Name ", width: 130 },
      { field: "email", headerName: "Email", type: "text", width: 230 },
      {
        field: "pass",
        headerName: "password",
        type: "text",
        width: 180,
      },
      {
        field: "addr",
        headerName: "Address",
        type: "text",
        width: 250,
      },
    ];



  return (
    <div style={{ height: 400, width: "60%" }}>
      <DataGrid
        rows={allEmployee}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default AllEmployee