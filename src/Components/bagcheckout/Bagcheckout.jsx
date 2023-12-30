
// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import dash from "../../Icons/dash.png";
// import swal from 'sweetalert2'
// import '../BuyingScreen/Buy.css'
// import Bagproduct from './Bagproduct';
// const Bagcheckout = () => {
//   const user = JSON.parse(localStorage.getItem('currentUser'));
//   const[carts , setCart] = useState([]);
//   const[cartproduct , setProduct] = useState([]);
//   const[loading , setloading] = useState(false);





//   // const user = JSON.parse(localStorage.getItem('currentUser'));
//   const userid = user._id;
  
  
  
//       const[name , setName] =   useState("");
//       const[contactno , setContactno] = useState("");
//       const[address , setAddress] = useState("");
//       const[city , setCity] = useState("");
//       const[state , setState] = useState("");
//       const[zipcode , setZipcode] = useState("");
//       const[paymentdetail , setPaymentdetail] = useState("");
//   useEffect(()=>{
//     if(user){
//        async function fetchData() {
//           setloading(true);
//         const data = await(await axios.post('http://127.0.0.1:4000/getbagcheckout',{userid:user._id})).data
//     setCart(data)
//     // setProduct(data.product);
//     // console.log(data);
//     console.log(carts);
    
//     // console.log(carts);
//     // localStorage.setItem('currentCount', JSON.stringify(carts));
//     setloading(false);
//         }
//         fetchData();
    
//     }
    
    
    
//       },[]);

    

      
// async function checkout(){
//   const data= {
//       carts,
//       name,
//       contactno,
//       address,
//       city,
//       state,
//       zipcode,
//       userid,
//       paymentdetail
      
//       }
// // console.log(data);


//   // window.location.href = '/';






//   await axios.post('http://127.0.0.1:4000/buyproductincart' ,data).then((resp)=>{
//       const da  =  resp.data;
//       console.log(da);

//       swal.fire('Yup!' ,"Order Placed Successfully",'success')
//       .then(result=>{
//           window.location.href = '/';
      
//       })
//   })

// }

//       // console.log(carts.product.length)

//   return (
//     <div>
//       <p className="top roww">
//         <a href="/">Home</a>
//         <img src={dash} alt="product" height={8} width={8} />
//         {/* <a href="/home/ear">{bproduct.catagory}</a>
//         <img src={dash} alt="product" height={8} width={8} /> */}
//         Checkout
        

//       </p>
//       <hr />

// <div class="container-7">
// <div className="address-section">
//     <h2>Enter Your Address</h2>
//     <form>
//       <label for="fullname">Full Name:</label>
//       <input type="text" id="fullname" name="fullname" required
//       value={name} onChange={(e)=>{setName(e.target.value)}} 
      
//       />
//       <label for="contactno">Contact No:</label>
//       <input type="text" id="contactno" name="contactno" 
//       value={contactno} onChange={(e)=>{setContactno(e.target.value)}} required
      
//       />
//       <label for="address">Address:</label>
//       <textarea id="address" name="address"
//       value={address} onChange={(e)=>{setAddress(e.target.value)}} required
//       ></textarea>
//       <label for="city">City:</label>
//       <input type="text" id="city" name="city" 
//       value={city} onChange={(e)=>{setCity(e.target.value)}} required
//       />
//       <label for="city">State:</label>
//       <input type="text" id="state" name="state" 
//       value={state} onChange={(e)=>{setState(e.target.value)}} required
//       />
//       <label for="zipcode">Zip Code:</label>
//       <input type="text" id="zipcode" name="zipcode" 
//       value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} required
//       />
//       {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={clicked}/><span>check</span> */}

//     </form>
//     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><span>Save this information for next time</span>
    
//   </div>

//   <div class="product-details">
//     <h2>product Details {carts.product}</h2>
//     <div className="container-2">
//         {loading ? (
//           <h1>login to Continue</h1>
//         ) : (
//           carts.map((cart) => {
//             return (
//               <div className="box">
//                 <Bagproduct path="/cart" cart={cart} />
//               </div>
//             );
//           })
//         )}
//       </div>

//   </div>

//   <div class="payment-option">
//     <h2>Payment</h2>
//     <p>Select Payment Method:</p>
//     <label for="cod">Cash on Delivery</label>
//     <input type="radio" id="cod" name="payment" value={paymentdetail}  onChange={(e)=>{setPaymentdetail("Cash On Delivery")}} />
//   </div>

//   <button class="checkout-btn" onClick={checkout} >Proceed to Checkout</button>
// </div>
//     </div>
//   )
// }

// export default Bagcheckout
