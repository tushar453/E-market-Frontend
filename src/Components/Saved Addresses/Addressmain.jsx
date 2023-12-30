
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./Address.css";
import dash from "../../Icons/dash.png";
import { Link } from 'react-router-dom';
import Addresscontent from './Addresscontent';
const Addressmain = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const[address , setAddress] = useState([]);
    const[loading , setloading] = useState(false);
    useEffect(()=>{
        if(user){
              async function fetchData() {
              setloading(true);
            const addressdata = await(await axios.post('https://emarketbackendd.onrender.com/getAddress',{userid:user._id})).data
        setAddress(addressdata)
        // localStorage.setItem('currentCount', JSON.stringify(carts));
        setloading(false);
            }
            fetchData();
        }
        
        
        
        
        
        
          },[])
        

  return (
    <div>
       <p className="top roww">
<Link to={"/"}>Home</Link>
          
          <img src={dash} alt="product" height={8} width={8} /> Addresses
        </p>
        <hr />


        {address.length<1 && <h1>Nothing To Show For Addresses</h1>}
     <div className="container-3">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          address.map((address) => {
            return (
              <div className="box">
                <Addresscontent path="/address" address={address} />
              </div>
            );
          })
        )}
      </div>

      <footer>
        <p>&copy; 2024 Your E-Market</p>
    </footer>

     
        
    </div>
  )
}

export default Addressmain
