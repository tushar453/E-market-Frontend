import React from "react";
import "./footer.css";
import insta from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import { Link } from "react-router-dom";
import youtube from "../../Icons/youtube.png";
function Footer() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div>
      <div className="footer">
        <div className="pages footer-item">
          <p className="item-heading">Pages</p>
          <a className="link" href="/about">
            About us
          </a>
          <a className="link" href="https://wa.me/7357228476">
            Contact us
          </a>
          <a className="link" href="/privacy">
            Privacy Policy
          </a>
          <a className="link" href="/termsandcondition">
            Terms and conditions
          </a>
          <a className="link" href="/FAQ">
            FAQ
          </a>
        </div>
        <div className="account footer-item">
          <p className="item-heading">My Account</p>
          {user ? (<> <Link className="link" to={"/my-account"}>
              Account
            </Link></>) : (<> <Link className="link" to={"/signin"}>
              Login
            </Link>
            <Link className="link" to={"/signup"}>
              Register
            </Link></>) }

          <a className="link" href="https://wa.me/7357228476">
            Track order
          </a>
        </div>
        <div className="follow footer-item">
          <p className="item-heading">Follow us</p>
          <a
            className="link row"
            href="https://www.instagram.com/sharmatushar296/"
          >
            <img src={insta} height={12} width={12} alt="product" />
            Instagram
          </a>
          <a
            className="link row"
            href="https://www.facebook.com/"
          >
            <img src={facebook} height={12} width={12} alt="product" />
            Facebook
          </a>
         
        </div>
        <div class="line"></div>
        <div className="copyright">Copyrigt &copy; 2023 E-Market</div>
      </div>
    </div>
  );
}
export default Footer;
