import React from 'react'
import SignIn from '../sigin'
import Admin from '../admin';
import Employee from '../employee';
import Navbar from '../NavBar';
 import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="" element={<SignIn />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path ="/employee" element = {<Employee /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Layout