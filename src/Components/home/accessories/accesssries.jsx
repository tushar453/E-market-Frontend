import "./accessories.css";
import React, { useState, useEffect } from "react";
import "../../general.css";
import axios from "axios";

import swal from "sweetalert2";

import dash from "../../../Icons/dash.png";
import Laptops from "./Laptops";

const Accsesories = () => {
  const [laptop, setLaptops] = useState([]);
  const [loading, setloading] = useState("");
  useEffect(()=>{
    console.log("useeffect called");
  async function fetchdata(){
   setloading(true);
   await axios.get("https://emarketbackendd.onrender.com/Laptoplist").then((res)=>{
    const da  = res.data;
     setLaptops(da);
     setloading(false);
    //  console.log(da);
   });
 }

 fetchdata();
  } ,[])
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Laptops
      </p>
      <hr />
      <div className="container-2">
          {loading ? (
          <h1>Loading...</h1>
        ) : (
          laptop.map((laptop) => {
            return (
              <div className="box">
                <Laptops
                path="/laptop"
                laptop={laptop}
                
                
                />
                {/* <Laptop
                path="/laptop"
                laptop = {laptop}
                
                /> */}
             {/* <laptop
             path="/laptop"
             laptop={laptop}
             /> */}
              </div>
            );
          })
        )}</div>
     
    </div>
  );
};

export default Accsesories;
