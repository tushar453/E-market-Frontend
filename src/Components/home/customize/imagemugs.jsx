import React from "react";
import Reviews from "./reviews";
import "./image.css";
import dash from "../../../Icons/dash.png";
const Imagemugs = () => {
  return (
    <div>
      {" "}
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize">Customize now</a>
        <img src={dash} alt="product" height={8} width={8} />
        Image
      </p>
      <div class="line"></div>
      <div className="container response">
        <div
          className="content"
          style={{ textAlign: "center", padding: "30px", fontWeight: "600" }}
        >
          <p>Buy 2 mugs and enjoy 10% savings.</p>
        </div>

        <div className="box row-container">
          <div className="upload-box2 container">
            <button className="upload-image2">Upload Image</button>
          </div>
          <div className="upload-box2 container">
            <button className="upload-image2">Upload more</button>
          </div>
        </div>
        {/* <div style={{ padding: "20px" }}>
          <div style={{ textAlign: "center" }}>
            If you add a pop socket or pop gripper with cover then you get
            matching pop gripper or pop socket with the same print as your
            cover.
          </div>
          <div
            className="column"
            style={{
              marginTop: "32px",
              gap: "40px",
              fontfamily: "Titillium Web",
            }}
          >
            <button className="option">
              <span style={{ fontSize: "20px" }}>Add a pop gripper </span>(only
              for 59/-)
            </button>
            <button className="option">
              <span style={{ fontSize: "20px" }}>Add a pop socket </span>(only
              for 59/-)
            </button>
          </div>
        </div>
        <div className="detail-container">
          <label>Suggestion</label>
          <input className="drop-box" type="text" placeholder=""></input>
        </div> */}
        <div>
          <a
            className="container customize-btn"
            style={{
              color: "#FFF",
              fontfamily: "Gill Sans MT",
              fontsize: "24px",
              fontstyle: "normal",
              fontweight: "400",
              lineheight: "normal",
            }}
            href="/home/customize/image/details-mugs"
          >
            Fill details
          </a>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Imagemugs;
