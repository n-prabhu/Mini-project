import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../components/header/header";
import "../style/detail.css";
import Pagination from "../components/pagination/pagination";

const Detail = () => {
  const [account, setAccount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountPerPage, setAccountPerPage] = useState(8);

  const CallApi = async () => {
    axios.get("http://localhost:8000/api/users").then((response) => {
      if (response.data.message === "Ok") {
        setAccount(response.data.data);
      }
    });
  };

  useEffect(() => {
    CallApi();
  }, []);

  let indexOfLastAccount = currentPage * accountPerPage;
  let indexOfFirstAccount = indexOfLastAccount - accountPerPage;
  const currentAccount = account.slice(indexOfFirstAccount, indexOfLastAccount);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Header />

      <div className="d-flex flex-wrap justify-content-center">
        {currentAccount.map((acc) => {
          return (
            <div key={acc._id} className="card m-4" id="Detail_Card">
              <img
                src="https://w7.pngwing.com/pngs/105/693/png-transparent-computer-icons-android-contact-blue-text-rectangle.png"
                alt="logo"
                className="img-fluid"
                id="profile_logo_Img"
              ></img>
              <div className="card-body text-center">
                <h5 class="card-title">
                  {acc.firstName} {acc.lastName}
                </h5>
                <div>{acc.phoneNo}</div>
                <div>Age: {acc.age}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <Pagination
          totalAccount={account.length}
          accountPerPage={accountPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default Detail;
