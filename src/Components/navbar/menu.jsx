// PopupMenu.js
import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import close from "../../Icons/close.png";
import logout from "../../Icons/logout.png";

const PopupMenu = ({ isOpen, onClose }) => {
  const logouts = ()=>{
    localStorage.removeItem('currentUser');
    window.location.href = '/signin'
  }
  return (
    <div className={`popup-menu ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        {" "}
        <img src={close} height={32} width={32} alt="product" />
      </button>
      <div className="link-container" style={{ marginTop: "32px" }}>
        <Link href={"/home/wishlist"}>Wishlist</Link>
        <Link href={"/home/bag"}>Bag</Link>
        <Link href={"/my-account"}>My Account</Link>
        <Link className="a" to={"/addresses"}>Saved address</Link>
        <Link className="a" to={"/purchases"}>Purchases</Link>
        <div
          className="row-container logout-btn"
          style={{ justifyContent: "left" }}
        >
          {" "}
          <img src={logout} height={32} width={32} alt="product" />
          <a href="/" onClick={logouts} style={{ color: "#bf4444" }}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
