import "../../phone cover/phoneCover.css";
import MovingText from "../../../movingtext";
import dash from "../../../../Icons/dash.png";
import mug1 from "../../../../Icons/mug1.png";
import mug2 from "../../../../Icons/mug 2.png";
import mug3 from "../../../../Icons/mug3.png";
import mug4 from "../../../../Icons/mug4.png";
import mug5 from "../../../../Icons/mug5.png";
import mug6 from "../../../../Icons/mug6.png";
const Mugs = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/accessories">Accsessories</a>
        <img src={dash} alt="product" height={8} width={8} />
        Mug
      </p>
      <div class="line"></div>
      <div className="container">
        {" "}
        <div className="title-container">Some examples of Mugs</div>
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
        {/* <p>One mug for 350/-</p> */}
        <MovingText sentence={"One mug for 350/-"} />
        <div className="container customize-btn">
          <a href="/home/customize" style={{ color: "#fffbf1" }}>
            Customize Now
          </a>
        </div>
        <div className="column" style={{ alignItems: "center" }}>
          <p style={{ fontSize: "32px" }}>Magic mug</p>
          <div className="row" style={{ gap: "32px", marginBottom: "40px" }}>
            <img src={mug1} alt="product" height={145} width={150} />
            <img src={mug2} alt="product" height={145} width={150} />
          </div>
          <div class="line"></div>
          <p style={{ fontSize: "32px" }}>Photo mug</p>
          <div className="row" style={{ gap: "32px", marginBottom: "40px" }}>
            <img src={mug3} alt="product" height={145} width={150} />
            <img src={mug4} alt="product" height={145} width={150} />
          </div>
          <div class="line"></div>
          <p style={{ fontSize: "32px" }}>Name mug</p>
          <div className="row" style={{ gap: "32px", marginBottom: "40px" }}>
            <img src={mug5} alt="product" height={145} width={150} />
            <img src={mug6} alt="product" height={145} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mugs;
