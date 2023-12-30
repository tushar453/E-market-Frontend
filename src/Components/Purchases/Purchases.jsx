
import dash from "../../Icons/dash.png";
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./order.css";
import Myorder from './Myorder';
const Purchases = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const[orders , setOrders] = useState([]);
    const[loading , setloading] = useState(false);
    useEffect(()=>{
        if(user){
              async function fetchData() {
              setloading(true);
            const orderdata = await(await axios.post('https://emarketbackendd.onrender.com/getOrders',{userid:user._id})).data
        setOrders(orderdata)
        // localStorage.setItem('currentCount', JSON.stringify(carts));
        setloading(false);
        console.log(orders);
            }
            fetchData();
        }        
          },[])



  return (
    <div>
        <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={12} width={12} />
        <a href="/signin">Orders</a>
      </p>
     <hr />
     {orders.length<1 && <h1>No orders yet</h1>}
<main>
     <section className="orders-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          orders.map((orders) => {
            return (
              
                <Myorder path="/orders" orders={orders} />
            
            );
          })
        )}
      </section>
      </main>


    </div>
  )
}

export default Purchases
