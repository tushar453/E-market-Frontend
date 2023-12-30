import React from "react";
// import { useRef } from "react";
import "./coverImagetshirt.css";
import "./carousel.css";
import tshirt from "../../Icons/t1.jpg";
import tshirt2 from "../../Icons/t2.jpg";
import tshirt3 from "../../Icons/t3.jpg";
import tshirt4 from "../../Icons/t4.jpg";
import like from "../../Icons/love.png";
import share from "../../Icons/share.png";
// import shopbag from "../../Icons/shopping-bag.png";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="product-container" style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <img className="coverImage" src={tshirt} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        <div style={{ position: "relative" }}>
          <img className="coverImage" src={tshirt2} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        <div style={{ position: "relative" }}>
          <img className="coverImage" src={tshirt3} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        <div style={{ position: "relative" }}>
          <img className="coverImage" src={tshirt4} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
