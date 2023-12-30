
import './Buy.css'
import React ,{useState , useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert2'
import dash from "../../Icons/dash.png";
import { useParams } from 'react-router'
const Buy = () => {
    const {producid} = useParams();
    const[datas ,setdatas] = useState("");
    const[loading , setloading] = useState("");
    const[bproduct , setProduct] = useState([]);
    const user = JSON.parse(localStorage.getItem('currentUser'));
const userid = user._id;



    const[name , setName] =   useState("");
    const[contactno , setContactno] = useState("");
    const[address , setAddress] = useState("");
    const[city , setCity] = useState("");
    const[state , setState] = useState("");
    const[zipcode , setZipcode] = useState("");
    const[paymentdetail , setPaymentdetail] = useState("");
    //  setUserid(user._id);


    useEffect(()=>{ 
   
        async function fetchDatas(){
            setloading(true);    
           
            await axios.post('https://emarketbackendd.onrender.com/BuyProductbyid' ,{producid}).then((res)=>{
            const da  =  res.data;
            console.log(da);
            setProduct(da);
            setloading(false);
            
            })
       }
        fetchDatas();
    
    
   
    
    
     },[]);

async function clicked(e){
    e.preventDefault();
    // setUserid(user._id);

    const data= {
        name,
        contactno,
        address,
        city,
        state,
        zipcode,
        userid
        
        }
        
        
        // console.log(data);

        await axios.post('https://emarketbackendd.onrender.com/address' ,data).then((resp)=>{
            const da  =  resp.data;
            console.log(da);

            swal.fire('Yup!' ,"Address Added Successfully",'success')
            .then(result=>{
            
            
            })
        })


    





    
}



async function checkout(){
    const data= {
        bproduct,
        name,
        contactno,
        address,
        city,
        state,
        zipcode,
        userid,
        paymentdetail
        
        }
console.log(data);


    // window.location.href = '/';






    await axios.post('https://emarketbackendd.onrender.com/buyproduct' ,data).then((resp)=>{
        const da  =  resp.data;
        console.log(da);

        swal.fire('Yup!' ,"Order Placed Successfully",'success')
        .then(result=>{
            window.location.href = '/';
        
        })
    })










       


}




  return (
<>
<p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/ear">{bproduct.catagory}</a>
        <img src={dash} alt="product" height={8} width={8} />
        Checkout
        

      </p>
      <hr />

<div class="container-7">
<div className="address-section">
    <h2>Enter Your Address</h2>
    <form>
      <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" required
      value={name} onChange={(e)=>{setName(e.target.value)}} 
      
      />
      <label for="contactno">Contact No:</label>
      <input type="text" id="contactno" name="contactno" 
      value={contactno} onChange={(e)=>{setContactno(e.target.value)}} required
      
      />
      <label for="address">Address:</label>
      <textarea id="address" name="address"
      value={address} onChange={(e)=>{setAddress(e.target.value)}} required
      ></textarea>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" 
      value={city} onChange={(e)=>{setCity(e.target.value)}} required
      />
      <label for="city">State:</label>
      <input type="text" id="state" name="state" 
      value={state} onChange={(e)=>{setState(e.target.value)}} required
      />
      <label for="zipcode">Zip Code:</label>
      <input type="text" id="zipcode" name="zipcode" 
      value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} required
      />
      {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={clicked}/><span>check</span> */}

    </form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={clicked}/><span>Save this information for next time</span>
    
  </div>

  <div class="product-details">
    <h2>product Details</h2>
    <h2><span>Product Details : </span>{bproduct.description}</h2>
    <div className='productimg'><img src={bproduct.imageurls} alt="" /></div>
    <div class="product">
      <p><span>Product name   :   </span>{bproduct.name}</p>
      <p><span>Price : </span>{bproduct.price}</p>
    </div>
   
  </div>

  <div class="payment-option">
    <h2>Payment</h2>
    <p>Select Payment Method:</p>
    <label for="cod">Cash on Delivery</label>
    <input type="radio" id="cod" name="payment" value={paymentdetail}  onChange={(e)=>{setPaymentdetail("Cash On Delivery")}} />
  </div>

  <button class="checkout-btn" onClick={checkout}>Proceed to Checkout</button>
</div>


</>
  )
}

export default Buy
