// import React from 'react'
// import { useState } from 'react';
// import '../BuyingScreen/Buy.css'
// const Bagproduct = ({cart}) => {
//     const[loading , setloading] = useState(false);
//     const calculateTotal = () => {
//         let total = 0;
//         cart.product.forEach((item) => {
//           total += item.price;
//         });
//         return total;
        
//       };

//     //   console.log(cart.product);
    
//   return (
//     <div class="product-details">
//         <h1>No of items : {cart.product.length}</h1>
//        {loading ? (
//           <h1>login to Continue</h1>
//         ) : (
//           cart.product.map((cart) => {
//             return (
//                 <div class="product-details">
               
//                 <h2><span>Product Details : </span>{cart.description}</h2>
//                 <div className='productimg'><img src={cart.imageurls} alt="" /></div>
//                 <div class="product">
//                   <p><span>Product name   :   </span>{cart.name}</p>
//                   <p><span>Price : </span>{cart.price}</p>
//                 </div>
               
//               </div>
            
//             );
//           })
//         )}
//          <p>Total: ${calculateTotal()}<span class="total-price"></span></p>
//   </div>
//   )
// }

// export default Bagproduct
