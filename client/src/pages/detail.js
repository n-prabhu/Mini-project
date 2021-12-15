import Header from "../components/header/header";
import "../style/detail.css";

import Pagination from "../components/pagination/pagination";

const Detail = () => {
  return (
    <div>
      <Header />

      <div className="Main_card">
        <div className="card m-5" id="Detail_Card">
          <img
            src="https://w7.pngwing.com/pngs/105/693/png-transparent-computer-icons-android-contact-blue-text-rectangle.png"
            alt="logo"
            className="img-fluid"
            id="profile_logo_Img"
          ></img>
          <div className="card-body text-center">
            <h5 class="card-title">Mohamed Mufasil </h5>
            <div>1234567890</div>
            <div>Age: 23</div>
          </div>
        </div>
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};
export default Detail;
