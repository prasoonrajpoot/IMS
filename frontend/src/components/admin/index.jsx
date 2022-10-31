import React from 'react'
import AddEmp from './addEmp';

import { useSelector } from "react-redux";
import AllEmployee from './allEmployee';
function Admin() {

  const isAdmin = useSelector((state) => state.isAdmin);

  if(!isAdmin){
    return (<div>
      Please login to be here 
    </div>)
  }else{
    return (
      <div>
        Admin Dashboard
        <AddEmp />
        <AllEmployee />
      </div>
    )
  }
  
}



export default Admin