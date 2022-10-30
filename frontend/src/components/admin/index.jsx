import React from 'react'
import AddEmp from './addEmp';

import { useSelector } from "react-redux";

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
      </div>
    )
  }
  
}



export default Admin