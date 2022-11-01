import React from 'react'
import AddEmp from './addEmp';

import { useSelector } from "react-redux";
import AllEmployee from './allEmployee';
import Items from './items';
import ProfitTable from './profitTable';

function Admin() {

  const isAdmin = useSelector((state) => state.isAdmin);

  if(!isAdmin){
    return (<div>
      Please login to be here 
    </div>)
  }else{
    return (
      <div>
        <AddEmp />
        <Items />
        <AllEmployee />
        <ProfitTable />
      </div>
    );
  }
  
}



export default Admin