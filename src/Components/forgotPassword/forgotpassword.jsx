import "./forgotpassword.css";
import Footer2 from "../footer/footer2";
import Sidebar from "../sidebar/sidebar";
import dash from "../../Icons/dash.png";
function Forgotpassword() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content ">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={12} width={12} />
          <a href="/signin">Login</a>
          <img src={dash} alt="product" height={12} width={12} />
          Reset Password
        </p>
        <div class="line"></div>
        <div className="container margin response">
          <div className="title">
            <p>Customer Login</p>
          </div>
          <div>
            <p className="reset-text">
              We will send you an email to reset your password
            </p>
            <div className="form">
              <input
                className="form-item"
                type="email"
                placeholder="Email"
              ></input>
              <button className="form-item action-btn create-btn">
                SUBMIT
              </button>
              <button className="form-item cancel-btn">
                <a href="/signin">CANCEL</a>
              </button>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
export default Forgotpassword;
