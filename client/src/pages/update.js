import Header from "../components/header/header";
import { useState } from "react";
import axios from "axios";
import AlertBox from "../components/alert";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [searchText, setSearchText] = useState("");
  const [alert, setalert] = useState(false);
  const [message, setMessage] = useState("");

  const SearchAccount = async () => {
    axios
      .get(`http://localhost:8000/api/users/findone/${searchText}`)
      .then((response) => {
        setFirstName(response.data.data[0].firstName);
        setLastName(response.data.data[0].lastName);
        setNumber(response.data.data[0].phoneNo);
        setAge(response.data.data[0].age);
      });
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const Close = () => {
    setTimeout(() => {
      setalert(false);
    }, 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const updateAccount = {
      firstName,
      lastName,
      age,
    };

    await axios
      .put(
        `http://localhost:8000/api/users/updateaccount/${number}`,
        updateAccount
      )
      .then((response) => {
        setMessage(response.data.message);
        setalert(true);
        Close();
      });
  };

  return (
    <div>
      <Header />

      <div className="m-5">
        <input
          className="form-control mt-4"
          type="number"
          placeholder="Find a Account for update"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="btn btn-dark" onClick={SearchAccount}>
          Search
        </button>
      </div>
      {alert ? (
        <div className="mx-5">
          <AlertBox message={message} />
        </div>
      ) : null}
      <div className="m-5">
        <form className="m-5" onSubmit={onSubmit}>
          <input
            className="form-control my-4"
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={onChangeFirstName}
          ></input>
          <input
            className="form-control my-4"
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={onChangeLastName}
          ></input>
          <input
            className="form-control my-4"
            type="number"
            placeholder="Contact Number"
            disabled
            required
            value={number}
            onChange={onChangeNumber}
          ></input>
          <input
            className="form-control my-4"
            type="number"
            placeholder="Age"
            required
            value={age}
            onChange={onChangeAge}
          ></input>
          <button className="btn btn-primary form-control my-4">
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Update;
