import "./navbar.css";
import { useState } from "react";
import PopupMenu from "./menu";
import bag from "../../Icons/bag.png";
import logo from "../../Icons/balaji cover logo.png";
import menu from "../../Icons/menu1.png";
import { useEffect } from "react";
import axios from 'axios'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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







  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };






  return (
    <div className="navbar">
      <img src={logo} height={24} width={24} alt="product" />
      <p className="title">E-Market</p>
      <a href="/home/bag">
        <img src={bag} height={24} width={24} alt="product" />
        <span className="count-3">{cart.length}</span>
      </a>
      <img
        src={menu}
        height={24}
        width={36}
        alt="product"
        onClick={toggleMenu}
      />
      <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}
export default Navbar;
