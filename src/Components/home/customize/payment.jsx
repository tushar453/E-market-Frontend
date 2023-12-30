import React from "react";
import { useState } from "react";
import "../customize/detail.css";
import detail from "../../../Icons/detail.png";
import arrow from "../../../Icons/arrow.png";
import cart from "../../../Icons/shopping-cart.png";
import profile from "../../../Icons/Group 82.png";
import scan from "../../../Icons/scan.png";
import dash from "../../../Icons/dash.png";
// import QR from "../../../Icons/qr.jpg";

const Payment = () => {
  const [showsummary, setshowsummary] = useState(false);

  const opensummary = () => {
    setshowsummary(!showsummary);
  };

  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize">Customize now</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize/image">Image</a>
        <img src={dash} alt="product" height={8} width={8} />
        Detail
      </p>
      <div class="line"></div>
      <div className="container-close response" style={{ marginTop: "20px" }}>
        <div className="row-container gap">
          <div className="container icon-div">
            <div>
              <img src={detail} height={24} width={24} alt="product" />
            </div>
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
        <br></br>
        <div class="line"></div>
        <div
          className="row-container"
          style={{ justifyContent: "space-between", width: "350px" }}
        >
          <div className="row-container">
            <img src={cart} height={24} width={24} alt="product" />
            <p>Show order summary </p>
            {!showsummary && (
              <svg
                onClick={opensummary}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
              >
                <path
                  d="M1 1L4.24418 4.24418C4.65322 4.65322 5.32295 4.63092 5.70387 4.19558L8.5 1"
                  stroke="#4C5C5F"
                />
              </svg>
            )}

            {showsummary && (
              <svg
                onClick={opensummary}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
              >
                <path
                  d="M8.5 5L5.25582 1.75582C4.84678 1.34678 4.17705 1.36908 3.79613 1.80442L1 5"
                  stroke="#4C5C5F"
                />
              </svg>
            )}
          </div>

          <span>199</span>
        </div>
      </div>
      <div class="line"></div>
      {showsummary && (
        <div>
          <div
            className="row-container"
            style={{ justifyContent: "flex-start", padding: "20px" }}
          >
            <div className="dis-image">.</div>
            <div>
              <p style={{ fontWeight: "800" }}>Samsung Galaxy S23</p>
              <p>Glass cover</p>
            </div>
          </div>
          <div
            className="row-container"
            style={{
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <p>Total including taxes</p>
            <p>
              INR{" "}
              <span style={{ fontWeight: "800", fontSize: "24px" }}>199</span>
            </p>
          </div>
          <div class="line"></div>
        </div>
      )}
      <div
        className="column"
        style={{
          margin: "20px",
        }}
      >
        <div
          className="column"
          style={{
            lineHeight: "0.5",
            borderRadius: "24px",
            border: "1px solid #000",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "12px" }}>Contact</p>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p>6387014896</p>
            <p>Change</p>
          </div>
          <div
            className="short-line"
            style={{ height: "1px", backgroundColor: "#000", width: "100%" }}
          ></div>
          <p style={{ fontSize: "12px" }}>Ship to</p>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p>NIT Hamirpur , Himachal Pradesh </p>
            <p>Change</p>
          </div>
          <div
            className="short-line"
            style={{ height: "1px", backgroundColor: "#000", width: "100%" }}
          ></div>
          <p style={{ fontSize: "12px" }}>Method</p>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p>Cash on delivery</p>
            <p>249.00</p>
          </div>
          <div
            className="short-line"
            style={{ height: "1px", backgroundColor: "#000", width: "100%" }}
          ></div>
        </div>

        <div style={{ marginTop: "20px" }}>
          COD orders require a 50 rupee upfront payment, with a 199 rupee
          payment on delivery time
        </div>
        <p style={{ fontSize: "24px" }}>Payment</p>
        <div style={{ lineHeight: "0.1" }}>
          All transactions are secure and encrypted.
        </div>
        <div className="column" style={{ alignItems: "center" }}>
          {/* <img
            className="detail-box"
            src={QR}
            width={240}
            height={240}
            alt="qr"
          ></img> */}
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
                marginTop: "32px",
              }}
              href="/home/customize/image/payment-done"
            >
              PAY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
