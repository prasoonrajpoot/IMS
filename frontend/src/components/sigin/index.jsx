import React from 'react'
import axios from "axios";

const sendData = async() => {
 axios.post("/login");

}

function SignIn() {


  sendData();

  return (
    <div>
        this is singin file
    </div>
  )
}

export default SignIn;