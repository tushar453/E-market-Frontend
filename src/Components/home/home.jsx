import "./home.css";
import "../general.css";
import { Link } from 'react-router-dom';
import React ,{useState , useEffect} from 'react'
import tshirt from "../../Icons/watch.gif";
import gif from "../../Icons/giphy.gif";
import gif2 from "../../Icons/skin3.gif";
import gif3 from "../../Icons/laptop.gif";

import Footer2 from "../footer/footer2";
import Sidebar from "../sidebar/sidebar";
function Home() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  // console.log(user.name);




  
  const logout = ()=>{
    localStorage.removeItem('currentUser');
    window.location.href = '/signin'
  }
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        <div
          className="response"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row2 header">
            <div className="title-container">
              Explore our available products
            </div>
            <div
              className="btn-container row-container"
              style={{ gap: "50px" }}
            >

              
              {/* <a className="login" href="/signin">
                <button className="btn"> Login </button>
              </a> */}
               
              {user ? (<>
                <a className="login" >
                {user.isAdmin ? ( <button className="btn" > <Link to={"/admin"}> {user.name} </Link>  </button>) : ( <button className="btn">  {user.name}  </button>) }

               
              </a> 
                <a  class="dropdown-item"   href='#' onClick={logout}>logout</a>
            </>) :(<>
             
            

              <a className="login" href="/signin">
                <button className="btn"> Login </button>
              </a> 
            </>) } 


            




         
              <div className="row-container">
                {" "}
                <a className="row-container" href="https://wa.me/7357228476">
                  {" "}
                  <button className="whatsapp">Need Help?</button>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
                    height={48}
                    width={48}
                    alt="whatsapp logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="row2 center">
            <div className="category">
              <div className="container-close">
                <Link to={"/home/ear"}>

                  <div>
                    {/* <img src={frame} height={130} width={130} alt="product" /> */}
                    <img
                      className="category-itemlg category-item container-close"
                      src={gif}
                      height={160}
                      width={160}
                      alt="my-gif"
                    />
                  </div>
                </Link>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                 HeadPhones
                </span>
              </div>
              <div className="container-close">
                <Link to={"/home/skins"}>
                  <img
                    className="category-itemlg category-item container-close"
                    src={gif2}
                    height={120}
                    width={100}
                    alt="my-gif"
                  />
                </Link>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                 SmartPhones
                </span>
              </div>
              <div className="container-close">

                
                <Link to={"/home/Tshirt"}>
                  <img
                    className="category-itemlg category-item container-close"
                    src={tshirt}
                    alt="product"
                  />
                </Link>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  {" "}
                 SmartWatch
                </span>
              </div>
              <div className="container-close">
                <a href="/home/accessories">
                  {/* <img src={frame} height={130} width={130} alt="product" /> */}
                  <img
                    className="category-itemlg category-item container-close"
                    src={gif3}
                    height={120}
                    width={120}
                    alt="my-gif"
                  />
                </a>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  Laptops
                </span>
              </div>
            </div>
            <div className="custom nodisplay2">
              <p>
                "Design your phone cover in seconds! Click 'Customize Now,'
                upload your image, and make it yours. Create your unique phone
                case now!"
              </p>
              <div
                className="container customize-btn"
                style={{ paddingTop: "16px" }}
              >
                <a
                  style={{
                    color: "#FFF",
                    fontfamily: "Gill Sans MT",
                    fontsize: "24px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                  href="/home/customize"
                >
                  Customize Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <a
              className="container customize-btn nodisplay"
              style={{
                color: "#FFF",
                fontfamily: "Gill Sans MT",
                fontsize: "24px",
                fontstyle: "normal",
                fontweight: "400",
                lineheight: "normal",
              }}
              href="/home/customize"
            >
              Customize Now
            </a>
          </div>
          <Footer2 />
        </div>
      </div>
    </div>
  );
}
export default Home;
