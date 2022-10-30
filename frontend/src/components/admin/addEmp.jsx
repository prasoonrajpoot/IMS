import React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

import axios from "axios";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function AddEmp() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addButton = async (e) => {
      e.preventDefault();
      var data = {
        fname: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
        addr: document.getElementById("addr").value,
        isAdmin : document.getElementById("admin-done").checked
      };

      console.log(data);

      var res = await axios.post("/addUser", data);

      if(res.data == "succesful"){
        alert("user added succesfully");
      }
      if(res.data == "error"){
        alert("some error while trying to save user");
      }

    };


  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Add Employee
      </Button>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <input id = "name" type="text" placeholder="Enter Name of Employee" />
            <br />
            <input id = "email" type="text" placeholder="Enter Email for Employee" />
            <br />
            <input id = "pass" type="text" placeholder="Enter password for Employee" />
            <br />
            <input id = "addr" type="text" placeholder="Enter address of Employee" />
            <br />
            <input type="checkbox" id="admin-done" name="vehicle1" value="true" />
            <label for="vehicle1"> Grant Admin Prevailages </label>
            <br/>
            <button onClick = {addButton}>Add Employee</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddEmp