
import "./sidebar.css";
// import logout from "../../Icons/logout.png";
import heart from "../../Icons/heart (1).png";
import bag from "../../Icons/bag.png";
import { Link } from "react-router-dom";
import saved from "../../Icons/savedadd.png";
import info from "../../Icons/about.png";
import review from "../../Icons/review.png";
import logo from "../../Icons/balaji cover logo.png";
import userss from "../../Icons/userprofile.png";
import dropdown from "../../Icons/down.png";
import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const[cart , setCart] = useState("");
  const[loading , setloading] = useState(false);
  const users = JSON.parse(localStorage.getItem('currentUser'));
 
  useEffect(()=>{
    if(user){
      async function fetchData() {
      setloading(true);
    const data = await(await axios.post('https://emarketbackendd.onrender.com/getCart',{userid:users._id})).data
console.log(data);
setloading(false);

setCart(data)

    }
    fetchData(); 
    }
   



  },[])
  return (
    <div className="sidebar column">
      <div className="logo-container column">
        <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
        <div
          className="roww"
          style={{
            justifyContent: "space-around",
            height: "50px",
            padding: "0 20px",
          }}
        >
          {" "}
          <img src={logo} height={35} width={26} alt="product" />
          <p>E-Market</p>
        </div>

        <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
      </div>
      <div
        className="link-container container"
        style={{ marginTop: "20px", marginBottom: "150px", height: "300px" }}
      >
        <div className="roww">
          {" "}
          <img src={heart} height={24} width={24} alt="product" />
          <a className="a" href="/home/wishlist">
            Wishlist
          </a>
        </div>
        <div className="roww">
          {" "}
          <img src={bag} height={24} width={24} alt="product" />
          <span className="count">{cart.length}</span>
          <a className="a" href="/home/bag">
            Bag
          
          </a>
        </div>
        <div className="roww">
          {" "}
          <img src={saved} height={24} width={24} alt="product" />
          <Link className="a" to={"/addresses"}>Saved address</Link>
          {/* <a className="a" href="/addresses">
            
          </a> */}
        </div>
        <div className="roww">
          {" "}
          <img src={info} height={24} width={24} alt="product" />
          <Link className="a" to={"/purchases"}>Purchases</Link>
        </div>
        {/* <div className="roww">
          {" "}
          <img src={review} height={24} width={24} alt="product" />
          <a className="a" href="/">
            Review
          </a>
        </div> */}
      </div>
      {/* <div className="roww" style={{ marginTop: "72px", marginLeft: "24px" }}>
          {" "}
          <img src={logout} height={32} width={32} alt="product" />
          <a href="/" style={{ color: "#bf4444" }}>
            Logout
          </a>
        </div> */}
      <div className="column" style={{ marginTop: "40px" }}>
        <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
        <div className=" account2 roww" style={{ marginLeft: "16px" }}>
          {" "}
          <img src={userss} height={30} width={30} alt="product" />
          {users ? (<>
             <p>{users.name}</p>





            </>) :(<>
            
              <p>user</p>
            </>) } 
          <img src={dropdown} height={16} width={16} alt="product" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
