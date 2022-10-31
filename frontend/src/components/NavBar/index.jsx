import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { LogOutAction, RemoveAdminAction } from "../actions.js";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  return (
    <div>
        <ButtonAppBar />
    </div>
  )
}


function ButtonAppBar() {
     var isLoggedIn = useSelector((state) => state.isLoggedIn);
     var isAdmin = useSelector((state) => state.isAdmin);
        const dispatch = useDispatch();
        const navi = useNavigate();


    const handleClick = (e) => {
        e.preventDefault();

        if (isLoggedIn) {
          // console.log(" we here ");
          dispatch(LogOutAction());
          dispatch(RemoveAdminAction());
          navi("/");
        } else {
          navi("/");
        }

    }

      const handleClick2 = (e) => {
        e.preventDefault();
        navi("/");
      };

      const handleDashBoard = (e) => {
        e.preventDefault();
        if(isAdmin){
            navi("/admin");
        }else{
            navi("/employee")
        }
      }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={handleClick2} color="inherit">
              Inventory Management
            </Button>
          </Typography>
          <Button onClick = {handleDashBoard} color="inherit">
            DashBoard
          </Button>
          <Button onClick={handleClick} color="inherit">
            {isLoggedIn ? "LogOut" : "LogIn"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

