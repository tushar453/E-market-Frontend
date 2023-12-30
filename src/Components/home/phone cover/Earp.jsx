import React from 'react'
import "../skins/Phone.css";
import { Link } from 'react-router-dom';
import {useState} from 'react'
import swal from "sweetalert2";
import axios from "axios";
const Earp = ({ears}) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  async function Addtocart() {
    if (user) {
      const cartdetails = {
        ears,
        username: JSON.parse(localStorage.getItem("currentUser")).name,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      };
      console.log(cartdetails);
      await axios
        .post("https://emarketbackendd.onrender.com/addtocartfromheadphone", cartdetails)
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
        <Link to={`/details/${ears._id}`}> <img src={ears.imageurls} alt="Product 1" class="product-image"/></Link>
       
        <div class="overlay">
          <div class="add-to-cart" onClick={Addtocart}>Add to Cart</div>
        </div>
      </div>
      <div class="product-details">
        <h3>{ears.name}</h3>
        <p>Description of Product 1</p>
        <span>{ears.price}</span>
      </div>
    </div>
   
  </div>
  )
}

export default Earp
