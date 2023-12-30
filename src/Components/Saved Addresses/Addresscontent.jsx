import React from 'react'
import "./Address.css";
import axios from "axios";
const Addresscontent = ({address}) => {
    async function removeitem(aid ,e){
        
        console.log(aid);
        
        await axios.delete(`https://emarketbackendd.onrender.com/${aid}`).then((res)=>{
            const da  =  res.data;
            console.log(da);
            // setCarts(da);
            }).catch((error)=>{
                console.log(error);
            })
           
            window.location.reload();
            
        
    }


  return (
    <div>
         
        <section class="address-container">
            <div class="address">
                <h2>Name : {address.buyer}</h2>
                <p>State : {address.state}</p>
                <p>City : {address.city}</p>
                <p>Address : {address.address}</p>
                  <p>Zipcode : {address.zipcode}</p>
                <p>Comtact no : {address.contactno}</p>
              
                {/* <button>Edit</button> */}
                <button  onClick={e=>removeitem(address._id,e)}>Remove</button>
            </div>

        </section>
    

   
    </div>
  )
}

export default Addresscontent
