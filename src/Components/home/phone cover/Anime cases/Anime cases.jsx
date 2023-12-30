import "../../phone cover/phoneCover.css";
import Phonecover from "../../../../Icons/phone-cover.png";
import Phonecover2 from "../../../../Icons/phone-cover2.png";
import shopbag from "../../../../Icons/shopping-bag.png";
import dash from "../../../../Icons/dash.png";
const Anime = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/phone-cover">Phone cover</a>
        <img src={dash} alt="product" height={8} width={8} />
        Anime cases
      </p>
      <div class="line"></div>
      <div className="container">
        {" "}
        <div className="title-container">Some examples of Anime cases</div>
        <div className="display row-container">
          <div className="display-tile">
            <a href="/home/glass-cover/cover-image">A</a>
          </div>
          <div className="display-tile">
            <a href="/home/glass-cover/cover-image">A</a>
          </div>
          <div className="display-tile">
            <a href="/home/glass-cover/cover-image">A</a>
          </div>
          <div className="display-tile">
            <a href="/home/glass-cover/cover-image">A</a>
          </div>
        </div>
        <div class="line"></div>
        <p>Buy one cover for 399/-. Buy two save 20%</p>
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
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
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
              src={Phonecover2}
              height={175}
              width={150}
              alt="product"
            />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
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

export default Anime;
