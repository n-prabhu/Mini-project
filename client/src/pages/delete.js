import Header from "../components/header/header";

const Delete = () => {
  const SearchAccount = () => {};

  const DeleteAccount = () => {};

  return (
    <div>
      <Header />
      <div className="m-5">
        <input
          className="form-control mt-4"
          type="text"
          placeholder="Find a Account for update"
          onChange={SearchAccount}
        ></input>
        <button className="btn btn-dark" onClick={DeleteAccount}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Delete;
