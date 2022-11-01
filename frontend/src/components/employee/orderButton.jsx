import React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import "./orderButton.css";
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

const boxstyle = {
  width: 200,
  padding: '18px 20px',
  margin: '12px 80px',
  background: '#fff', 
  border: "2px solid #1976d2",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
}

function OrderButton(props) {
  var email = useSelector((state) => state.Email);

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const plusButton = (e) => {
    e.preventDefault();
    var data = {
      email : email,
      ItemId : document.getElementById("id").value,
      qty : document.getElementById("qty").value,
      type : "+"
    };
    placeOrder(data);
   }

   const minusButton = (e) => {
    e.preventDefault();
    var data = {
      email : email,
      ItemId: document.getElementById("id").value,
      qty: document.getElementById("qty").value,
      type: "-",
    };
    placeOrder(data);

   }

   const placeOrder = async (data) => {
    //  e.preventDefault();
    //  var data = {
    //    detail: document.getElementById("detail").value,
    //    safeAmount: document.getElementById("safeAmount").value,
    //    qty: document.getElementById("qty").value,
    //    price: document.getElementById("price").value,
    //  };

     console.log(data);

     var res = await axios.post("/doOrder", data);
     console.log(res.data);
     if (res.data == "succesfull") {

       alert("order executed  succesfully");
       props.setRefresh(!props.refreshData);
     }
     if (res.data == "err") alert(" some error ");
     if(res.data == "aukat se jayda"){
      alert("not enough available in inventory");
     }
   };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        create Order
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <input style={boxstyle}
              id="id"
              type="text"
              placeholder="Enter Item Id for action"
            />
            <br />
            <input style={boxstyle}
              id="qty"
              type="number"
              placeholder="Enter qty of action"
            />
            <br />
            <br />
            <button onClick={plusButton}>Add Items</button>
            <button onClick={minusButton}>Remove Items</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderButton;