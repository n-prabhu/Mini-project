import Header from "../components/header/header";
import axios from "axios";
import { useState } from "react";
import  DeleteModal  from "../components/deleteModal";
import AlertBox from "../components/alert";

const Delete = () => {

  const [errMessage,setErrMessage ] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [searchedValue,setSearchedValue]=useState();
  
  const deleteAccount = async() => {
    const searchedPhoneNumber = await document.getElementById('searchBox').value;
    setSearchedValue(searchedPhoneNumber);
    await axios.get(`http://localhost:8000/api/users/findone/${searchedPhoneNumber}`)
      .then((response)=>{
        if(response.data.data === null){
          setShowAlert(true);
          setErrMessage("Account not found");
        }else{
          setShowAlert(false);
          setOpen(true);
        }
      })
    
    
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
      {showAlert ? <div className="w-50 text-center m-auto"><AlertBox message={errMessage}/></div> : null}
      <DeleteModal openModal={open} setOpenModel={setOpen} phoneNumber={searchedValue}/>
    </div>
  );
};
export default Delete;
