import React from 'react'
import "./order.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Divider, Space, Tag } from 'antd';
const Myorder = ({orders}) => {
    
    async function cancelbookings(orderid){
        const result  = await(await axios.post("https://emarketbackendd.onrender.com/cancelorder" , {orderid})).data
        console.log(result);
        Swal.fire('Congrats' , 'Your booking has been cancelled','success').then(result=>{
          window.location.reload();
        })
        }
    
  return (
    <div class="order">
    <div class="order-header">
        <h2>Order :{orders._id}</h2>
        <p>Date: {orders.createdAt
}</p>
    </div>
    <div class="order-details">
        <p>Product: {orders.productname}</p>
        <p><p>Description: {orders.description}</p></p>
        <p>Price: {orders.price}</p>
        <p>Payment Mode: {orders.payment}</p>
        <p><strong>Status:  </strong>{orders.status == 'Confirmed' ? (<Tag color="cyan">CONFIRMED</Tag>): (    <Tag color="red">CANCELLED</Tag>)}</p>

        {/* <p>Quantity: </p> */}
        {/* <p>Total: $40.00</p> */}
    </div>

    {orders.status !== 'cancelled' && (
         <button class="cancel-button" onClick={()=>{cancelbookings(orders._id)}}  >Cancel</button>
      )}

</div>

  )
}

export default Myorder
