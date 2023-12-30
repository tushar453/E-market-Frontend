import "../general.css";
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
function Products() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={8} width={8} /> Products
        </p>
        <div class="line"></div>
        <div
          className="column"
          style={{
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "20px" }}>Phone covers/Skins</p>
          <p style={{ lineHeight: 1.5 }}>
            Explore our extensive selection of phone Covers and Skins compatible
            with over 200 smartphone models, including popular brands like
            Apple, Samsung, Realme, Nothing, Motorola, Xiomai, Oppo, Vivo,
            Google and iqoo Choose from hard, glass, soft, or chain cases to
            protect and style your device. Prices range from 199 to 399,
            ensuring an option for every budget. Shop now!
          </p>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
export default Products;
