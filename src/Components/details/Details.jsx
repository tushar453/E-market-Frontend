import "./Details.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import swal from "sweetalert2";
import { Link } from "react-router-dom";
import dash from "../../Icons/dash.png";
const Details = () => {
  const { earsid } = useParams();
  const [datas, setdatas] = useState("");

  const [loading, setloading] = useState("");
  const [product, setProduct] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    async function fetchDatas() {
      setloading(true);

      await axios
        .post("https://emarketbackendd.onrender.com/getProductbyid", { earsid })
        .then((res) => {
          const da = res.data;
          setProduct(da);
          setloading(false);
        });
    }
    fetchDatas();
  }, []);

  async function Addtocart() {
    if (user) {
      const cartdetails = {
        product,
        username: JSON.parse(localStorage.getItem("currentUser")).name,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      };
      console.log(cartdetails);
      await axios
        .post("https://emarketbackendd.onrender.com/addtocart", cartdetails)
        .then((res) => {
          const da = res.data;

          setdatas(da);
        });
      swal
        .fire("congratulations", "Added To Cart Successfully", "success")
        .then((result) => {
          window.location.href = "/home/bag";
        });
    } else {
      swal.fire("oops!", "Login To Continue", "error").then((result) => {
        window.location.href = "/signin";
      });
    }
  }

  async function Addtowish() {
    if (user) {
      const wishdetails = {
        product,
        username: JSON.parse(localStorage.getItem("currentUser")).name,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      };
      // console.log(cartdetails);
      await axios
        .post("https://emarketbackendd.onrender.com/addtoWish", wishdetails)
        .then((res) => {
          const da = res.data;

          setdatas(da);
        });
      swal
        .fire("congratulations", "Added To Wishlist Successfully", "success")
        .then((result) => {
          window.location.href = "/home/wishlist";
        });
    } else {
      swal.fire("Bad Try", "Login To Continue", "error").then((result) => {
        window.location.href = "/signin";
      });
    }
  }

  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/ear">{product.catagory}</a>
        <img src={dash} alt="product" height={8} width={8} />
        Details
      </p>
      <hr />
      <div class="product-container">
        <div class="product-image">
          <img src={product.imageurls} alt="Product Image" />
          <div class="heart-btn" onClick={Addtowish}>
            <div
              className={isActive ? "hcontent heart-active" : "hcontent"}
              onClick={handleToggle}
            >
              <span
                className={isActive ? "heart heart-active" : "heart"}
                id="heart"
              ></span>
              {/* <span className={isActive ? 'text heart-active' : 'text'}>Like</span>  */}
              {/* <span className={isActive ? 'numb heart-active' : 'numb'}></span> */}
            </div>
          </div>
        </div>
        <div class="product-info">
          <h1>{product.name}</h1>
          <p>Description of the product goes here.</p>
          <div class="buttons">
            <button class="add-to-cart-btn" onClick={Addtocart}>
              Add to Cart
            </button>
            <Link to={`/buy/${product._id}`}>
              {" "}
              <button class="add-to-wishlist-btn">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
