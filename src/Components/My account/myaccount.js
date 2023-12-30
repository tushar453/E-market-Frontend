import "../general.css";
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
function Account() {
  const users = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={8} width={8} /> My account
        </p>
        <div class="line"></div>
        <div
          className="column"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="upload-image" style={{ marginTop: "64px" }}>
            <a
              style={{
                color: "#FFF",
                fontfamily: "Gill Sans MT",
                fontsize: "24px",
                fontstyle: "normal",
                fontweight: "400",
                lineheight: "normal",
              }}
              href="/home
              "
            >
              Upload Image
            </a>
          </button>
          <p>{users.name}</p>
        </div>
        <div className="column" style={{ padding: "20px", gap: "20px" }}>
          <div style={{ fontSize: "24px" }}>Email</div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>{users.email}</div>
            <div style={{ fontSize: "14px" }}>Change</div>
          </div>
          <div style={{ fontSize: "24px" }}>Phone no</div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>xxxxxx</div>
            <div style={{ fontSize: "14px" }}>Change</div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
export default Account;
