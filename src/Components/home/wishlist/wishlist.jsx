import Phonecover from "../../../Icons/phone-cover.png";
import Phonecover2 from "../../../Icons/phone-cover2.png";
import shopbag from "../../../Icons/shopping-bag.png";
import dash from "../../../Icons/dash.png";
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Wishbag from "./Wishbag";
const Wishlist = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const[wish , setWish] = useState([]);
  const[loading , setloading] = useState(false);


  useEffect(()=>{
if(user){
      async function fetchData() {
      setloading(true);
    const wishdata = await(await axios.post('https://emarketbackendd.onrender.com/getwish',{userid:user._id})).data
setWish(wishdata)
// localStorage.setItem('currentCount', JSON.stringify(carts));
setloading(false);
    }
    fetchData();
}






  },[])

  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={12} width={12} />
        <a href="/signin">Wishlist</a>
      </p>
     <hr />
     {wish.length<1 && <h1>Nothing To Show In Wishlist</h1>}
     <div className="container-2">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          wish.map((wish) => {
            return (
              <div className="box">
                <Wishbag path="/wish" wish={wish} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Wishlist;
