import React from 'react'
import "../skins/Phone.css";
import { Link } from 'react-router-dom';
import {useState} from 'react'
import swal from "sweetalert2";
import axios from "axios";
const Laptops = ({laptop}) => {
  // const[carts , setCarts] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  async function Addtocart() {
    if (user) {
      const cartdetails = {
        laptop,
        username: JSON.parse(localStorage.getItem("currentUser")).name,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      };
      console.log(cartdetails);
      await axios
        .post("https://emarketbackendd.onrender.com/addtocartfromlaptop", cartdetails)
        .then((res) => {
          const da = res.data;

          // setdatas(da);
        });
      swal
        .fire("congratulations", "Added To Cart Successfully", "success")
        .then((result) => {
          window.location.href = "/home/bag";
        });
    } 
  }
  return (
    <div class="product-container">
      <div class="product-card">
        <div class="image-container">
        <Link to={`/details/${laptop._id}`}> <img src={laptop.imageurls} alt="Product 1" class="product-image"/></Link>
     
          <div class="overlay">
            <div class="add-to-cart" onClick={Addtocart}>Add to Cart</div>
          </div>
        </div>
        <div class="product-details">
          <h3>{laptop.name}</h3>
          <p>Description of Product 1</p>
          <span>{laptop.price}</span>
        </div>
      </div>
     
    </div>
  )
}

export default Laptops
