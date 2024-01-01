import Phonecover from "../../../Icons/phone-cover.png";
import Phonecover2 from "../../../Icons/phone-cover2.png";
import shopbag from "../../../Icons/shopping-bag.png";
import dash from "../../../Icons/dash.png";
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import "./bag.css";
import Bagcontent from "./Bagcontent";
const Bag = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const[carts , setCart] = useState([]);
  const[tprice , setTprice] = useState("");
  const[loading , setloading] = useState(false);

  useEffect(()=>{
if(user){
   async function fetchData() {
      setloading(true);
    const data = await(await axios.post('https://emarketbackendd.onrender.com/getCart',{userid:user._id})).data
setCart(data)
// console.log(carts);
// localStorage.setItem('currentCount', JSON.stringify(carts));
setloading(false);
    }
    fetchData();

}



  },[]);
  

  const calculateTotal = () => {
    let total = 0;
    carts.forEach((item) => {
      total += item.price;
    });
    return total;
    
  };

 
  

// async function submitdetails()
// {
//   const details = {
//     carts,
//     username: JSON.parse(localStorage.getItem("currentUser")).name,
//     userid: JSON.parse(localStorage.getItem("currentUser"))._id,
//   };

//   await axios
//   .post("http://127.0.0.1:4000/addtobagcheckout", details)
//   .then((res) => {
//     const da = res.data;

//     // setdatas(da);
//   });

//   // console.log(details);
// }
  return (
//     <div>
//       <p className="top roww">
//         <a href="/">Home</a>
//         <img src={dash} alt="product" height={12} width={12} />
//         <a href="/signin">Bag</a>
//       </p>
//       <hr />
//      {carts.length<1 && <h1>Nothing To Show In Cart</h1>}
//       <div className="container-2">
//         {loading ? (
//           <h1>login to Continue</h1>
//         ) : (
//           carts.map((cart) => {
//             return (
//               <div className="box">
//                 <Bagcontent path="/cart" cart={cart} />
//               </div>
//             );
//           })
//         )}
//       </div>

//       {carts.length>0 &&  <div class="cart-summary">
//         <h2>Cart Summary</h2>
//         <p>Total Items: {carts.length}<span class="total-items"></span></p>
//         <p>Total: ${calculateTotal()}<span class="total-price"></span></p>
     
//  <a    ><button class="checkout-btn"   >  Proceed to Checkout</button></a>
//       </div>}
     
//     </div>

<>
<p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Cart
      </p>
      <hr />
<div className="navbar-bag">
<p><a href="#" className="active">BAG</a></p>
<p>-------------</p>
<p> <a href="#">ADDRESS</a></p>
<p>-------------</p>
<p> <a href="#">PAYMENT</a></p>
</div>


</>
  );
};

export default Bag;
