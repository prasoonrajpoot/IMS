import React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";


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

function OrderButton() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const plusButton = (e) => {
    e.preventDefault();
    var data = {
      ItemId : document.getElementById("id").value,
      qty : document.getElementById("qty").value,
      type : "+"
    };
    placeOrder(data);
   }

   const minusButton = (e) => {
    e.preventDefault();
    var data = {
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
            <input
              id="id"
              type="text"
              placeholder="Enter Item Id for action"
            />
            <br />
            <input
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