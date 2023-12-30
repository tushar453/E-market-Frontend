import "./coverImage.css";
import Phonecover from "../../../../Icons/phone-cover.png";
import like from "../../../../Icons/love.png";
import share from "../../../../Icons/share.png";
import shopbag from "../../../../Icons/shopping-bag.png";
import dash from "../../../../Icons/dash.png";
const CoverImage = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/phone-cover">Phone cover</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/phone-cover/glass-cover">3D Glass Covers</a>
        <img src={dash} alt="product" height={8} width={8} />
        Cover Image
      </p>
      <div class="line"></div>
      <div className="container" style={{ marginTop: "32px" }}>
        <div className="coverImage">
          <img src={Phonecover} height={324} width={283} alt="product" />
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
        <div className="row-container">
          <button className="buy-btn action-btn">
            <a href="/home/customize/image" style={{ color: "#fffbf1" }}>
              Select Model
            </a>
          </button>
          <img
            className="icon"
            src={shopbag}
            height={36}
            width={36}
            alt="product"
          />
        </div>
        <div className="category">
          <div className="container">
            <img
              className="item-card"
              src={Phonecover}
              height={175}
              width={150}
              alt="product"
            />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a href="/home/customize/image" style={{ color: "#fffbf1" }}>
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
          <div className="container">
            <img
              className="item-card"
              src={Phonecover}
              height={175}
              width={150}
              alt="product"
            />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a href="/home/customize/image" style={{ color: "#fffbf1" }}>
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
