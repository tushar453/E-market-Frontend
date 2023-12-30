import React from "react";
import { useState } from "react";
import Reviews from "../home/customize/reviews";
import "../home/customize/detail.css";
import detail from "../../Icons/detail.png";
import arrow from "../../Icons/arrow.png";
import profile from "../../Icons/Group 82.png";
import scan from "../../Icons/scan.png";
import dash from "../../Icons/dash.png";

const DetailsTshirt = () => {
  const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/Tshirt">Tshirt</a>
        <img src={dash} alt="product" height={8} width={8} />
        Details
      </p>
      <div class="line"></div>
      <div className="container-close response" style={{ marginTop: "20px" }}>
        <div className="row-container gap">
          <div className="container icon-div">
            {" "}
            <img src={detail} height={24} width={24} alt="product" />
          </div>
          <img
            className="arrow1"
            src={arrow}
            height={8}
            width={24}
            alt="product"
          />
          <div className="container icon-div">
            {" "}
            <img src={profile} height={36} width={36} alt="product" />
          </div>
          <img
            className="arrow2"
            src={arrow}
            height={8}
            width={24}
            alt="product"
          />
          <div className="container icon-div">
            {" "}
            <img src={scan} height={24} width={24} alt="product" />
          </div>
        </div>
        <div className="container">
          {" "}
          <div className="detail-container">
            <label htmlFor="dropdown">Size*</label>
            <select className="drop-box" id="dropdown">
              <option value=""> Please Choose</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>{" "}
          </div>
          <div className="row-container gap">
            <div>
              <label htmlFor="quantity">Quantity</label>
              <div className="drop-box box2 row-container ">
                <button className="count" onClick={handleDecrement}>
                  -
                </button>
                <input
                  style={{
                    backgroundColor: "inherit",
                    border: "none",
                    width: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.valueAsNumber)}
                  min={1} // Set a minimum value, if needed
                />
                <button className="count" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="quantity">Amount</label>
              <div
                className="drop-box box2"
                style={{ fontSize: "20px", textAlign: "right" }}
              >
                1099.00
              </div>
            </div>
          </div>
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
              href="/home/customize/image/detail2"
            >
              NEXT
            </a>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default DetailsTshirt;
