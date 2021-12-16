import * as React from 'react';
import {Box, Typography, Modal} from "@material-ui/core"
import axios from 'axios';
import { useState } from 'react';

import AlertBox from './alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

 const DeleteModal =(props) => {

  const [errMessage,setErrMessage ] = useState(false);
  const [showAlert,setShowAlert] = useState(false);

  const {openModal,setOpenModel,phoneNumber} = props

  const handleClose = () => setOpenModel(false);

  const closeAlert = () =>{
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  const deleteUserAccount = async() =>{
    await axios.delete(`http://localhost:8000/api/users/deleteaccount/${phoneNumber}`)
      .then((res)=>{
        setErrMessage(res.data.message);
        setShowAlert(true);
        closeAlert();
        setOpenModel(false);
      })

  }

  return (
    <div>
      {showAlert? <div className='w-50 text-center m-auto'><AlertBox message = {errMessage} status={"success"}/></div>:null}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure want to delete ?
          </Typography>
          <br></br>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-primary' onClick={handleClose}>Cancel</button>
            <button className='btn btn-danger' onClick={deleteUserAccount}>Ok</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteModal;