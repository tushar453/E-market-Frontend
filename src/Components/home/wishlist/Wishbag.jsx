import React from 'react'
import "./Wishbag.css";
import {useState} from 'react'
import swal from "sweetalert2";
import axios from "axios";
const Wishbag = ({wish}) => {
  const[carts , setCarts] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  async function removeitem(wid ,e){
      
      console.log(wid);
      
      await axios.delete(`https://emarketbackendd.onrender.com/${wid}`).then((res)=>{
          const da  =  res.data;
          console.log(da);
          setCarts(da);
          }).catch((error)=>{
              console.log(error);
          })
         window.location.reload();
         
          
      
  }




  async function Addtocart() {
    if (user) {
      const cartdetails = {
        wish,
        username: JSON.parse(localStorage.getItem("currentUser")).name,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      };
      console.log(cartdetails);
      await axios
        .post("http://127.0.0.1:4000/addtocartfromwish", cartdetails)
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
    <main>
    <div class="wishlist-container">
      <div class="wishlist-items">
        <div class="wishlist-item">
          <img src={wish.imageurls} alt="Product"/>
          <div class="item-details">
            <h3>{wish.name}</h3>
            <p>Price: $XX.XX</p>
            <button class="remove-item" onClick={e=>removeitem(wish._id,e)}>Remove</button>
            <button class="remove-item" onClick={Addtocart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Wishbag
