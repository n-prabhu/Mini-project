import Header from "../components/header/header";
import axios from "axios";
import { useState } from "react";
import  DeleteModal  from "../components/deleteModal";
import AlertBox from "../components/alert";

const Delete = () => {

  const [errMessage,setErrMessage ] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [searchedValue,setSearchedValue]=useState("");
  const [alertStatus,setAlertStatus] = useState();
  
  const deleteAccount = async() => {
    const searchedPhoneNumber = await document.getElementById('searchBox').value;
    setSearchedValue(searchedPhoneNumber);

    if(!searchedValue){
      setAlertStatus("");
      setShowAlert(true);
      setErrMessage("Please enter the phone number");
    }else{
      await axios.get(`http://localhost:8000/api/users/findone/${searchedPhoneNumber}`)
      .then((response)=>{
        if(response.data.data === null){
          setAlertStatus("danger");
          setShowAlert(true);
          setErrMessage("Account not found");
        }else{
          setShowAlert(false);
          setOpen(true);
        }
      })
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-row justify-content-center">
        <div className="p-3 w-50">
          <input type="Number"
          className="form-control" 
          placeholder="Phone Number"
          aria-label="Phone Number"
          id="searchBox"/>
        </div>
        <div className="p-3">
          <button className="btn btn-dark" onClick={deleteAccount}>Delete</button>    
        </div>
      </div>
      {showAlert ? <div className="w-50 text-center m-auto"><AlertBox message={errMessage} status={alertStatus}/></div> : null}
      <DeleteModal openModal={open} setOpenModel={setOpen} phoneNumber={searchedValue} />
    </div>
  );
};
export default Delete;
