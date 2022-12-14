import { Button } from '@mui/material'
import React from 'react'

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Employee from '../employee';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
   overflow:'scroll',
  height:'80%',
  display:'block',
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Items() {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);


  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        See All Items List
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Employee />
        </Box>
      </Modal>
    </div>
  );
}

export default Items