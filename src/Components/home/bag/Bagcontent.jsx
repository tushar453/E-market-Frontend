import React from "react";
import "./bag.css";
import {useState} from 'react'
import axios from "axios";

const Bagcontent = ({ cart }) => {
    const[carts , setCarts] = useState([]);
    async function removeitem(id ,e){
        
        console.log(id);
        
        await axios.delete(`https://emarketbackendd.onrender.com/${id}`).then((res)=>{
            const da  =  res.data;
            console.log(da);
            setCarts(da);
            }).catch((error)=>{
                console.log(error);
            })
           
            window.location.reload();
            
        
    }
  return (
    <div>
      <main>
        <div class="cart-container">
        
          <div class="cart-items">
            <div class="cart-item">
              <img src={cart.imageurls} alt="Product" />
              <div class="item-details">
                <h3>{cart.name}</h3>
                <p>{cart.price}</p>

                <button class="remove-item" onClick={e=>removeitem(cart._id,e)} >Remove</button>
              </div>
            </div>

          
          </div>
        
        </div>
      </main>
    </div>
  );
};

export default Bagcontent;
