import "../home/skins/skin";
import "../general.css";
import React,{useState,useEffect} from 'react'
import axios from "axios";
import frame from "../../Icons/tshirt.png";
import size from "../../Icons/tshirtsize.jpg";
import shopbag from "../../Icons/shopping-bag.png";
import dash from "../../Icons/dash.png";
import Watch from "./Watch";
// import Footer2 from "../footer/footer2";
// import Sidebar from "../sidebar/sidebar";
function Tshirt() {
  const [watch, setWatch] = useState([]);
  const [loading, setloading] = useState("");


  useEffect(()=>{
    console.log("useeffect called");
  async function fetchdata(){
   setloading(true);
   await axios.get("https://emarketbackendd.onrender.com/watchlist").then((res)=>{
    const da  = res.data;
     setWatch(da);
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
        SmartWatches
      </p>
      <hr />
      <div className="container-2">
          {loading ? (
          <h1>Loading...</h1>
        ) : (
          watch.map((watch) => {
            return (
              <div className="box">
             <Watch
             path="/watch"
             watch={watch}
             />
              </div>
            );
          })
        )}</div>
    </div>
  );
}
export default Tshirt;
