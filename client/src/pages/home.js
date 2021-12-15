import Header from "../components/header/header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center">
        <Link to="/detail">
          <button className="m-5 w-50 p-2 btn btn-info">Fetch Account</button>
        </Link>
        <Link to="/add">
          <button className="m-5 w-50 p-2 btn btn-warning">Add Account</button>
        </Link>
        <Link to="/update">
          <button className="m-5 w-50 p-2 btn btn-success">
            Update Account
          </button>
        </Link>
        <Link to="delete">
          <button className="m-5 w-50 p-2 btn btn-danger">
            Delete Account
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
