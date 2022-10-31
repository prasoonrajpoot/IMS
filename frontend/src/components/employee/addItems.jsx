import React from 'react'

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
 

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddItems(props) {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

    var email = useSelector((state) => state.Email);


      const addButton = async (e) => {
        e.preventDefault();
        var data = {
            email : email,
            detail : document.getElementById("detail").value,
            safeAmount : document.getElementById("safeAmount").value,
            qty : document.getElementById("qty").value,
            costprice : document.getElementById("costprice").value,
            sellprice : document.getElementById("sellprice").value
        };

        console.log(data);

        var res = await axios.post("/addItems", data);
        if(res.data == "succesfull"){
          alert("item added succesfully");
          props.setRefresh(!props.refreshData)
        }
        if(res.data == "err")
          alert(" some error ");
      };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Add Items
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <input id="detail" type="text" placeholder="Enter Detail of Item" />
            <br />
            <input
              id="safeAmount"
              type="number"
              placeholder="Enter safe amount for item"
            />
            <br />
            <input id="qty" type="number" placeholder="Enter qty for Item" />
            <br />
            <input id="costprice" type="number" placeholder="Enter Cost price of Item" />
            <br />
            <input id="sellprice" type="number" placeholder="Enter Sell price of Item" />
            <br />
            <button onClick={addButton}>Add Item</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}


export default AddItems