import "./phoneCover.css";
import React, { useState, useEffect } from "react";
import "../../general.css";
import axios from "axios";
import dash from "../../../Icons/dash.png";
import Earp from "./Earp";
const PhoneCover = () => {
  const [ear, setEars] = useState([]);
  const [loading, setloading] = useState("");

  useEffect(()=>{
    console.log("useeffect called");
  async function fetchdata(){
   setloading(true);
   await axios.get("https://emarketbackendd.onrender.com/Earlist").then((res)=>{
    const da  = res.data;
     setEars(da);
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
        Earphone
      </p>
      <hr />
      <div className="container-2">
          {loading ? (
          <h1>Loading...</h1>
        ) : (
          ear.map((ears) => {
            return (
              <div className="box">
             <Earp
             path="/ear"
             ears={ears}
             />
              </div>
            );
          })
        )}</div>
    </div>
  );
};

export default PhoneCover;
