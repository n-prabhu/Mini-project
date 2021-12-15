import Header from "../components/header/header";
import { useState } from "react";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");

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

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {};
  };

  return (
    <div>
      <Header />
      <div className="m-5">
        <h1 className="text-center">Add Contact</h1>
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
            Add Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Add;
