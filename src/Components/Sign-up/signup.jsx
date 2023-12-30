import "./signup.css";
import React,{useState} from 'react'
import "../general.css";
import swal from 'sweetalert2'
import axios from 'axios';
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
function SignUp() {
  const[name , setName] =   useState("");
  const[email , setEmail] = useState("");
  const[password , setpassword] = useState("");
  const[cpassword , setcpassword] = useState("");
  const[loading , setLoading] = useState(false);
  const[text , settext] = useState("");
  
const  registeruser = async(e)=>{
  e.preventDefault();

 
if(password == cpassword){
  const data= {
name,
email,
password,
cpassword,

} 

await axios.post('https://emarketbackendd.onrender.com/register' ,data).then((res)=>{
  const da  =  res.data;
  settext(da);
  console.log(da.message);
     swal.fire('Verification' ,da.message,'info')
.then(result=>{


})
  //  localStorage.setItem('currentUser', JSON.stringify(da));
  })

  
  setName("");
  setEmail("");
  setpassword("");
  setcpassword("");
  setLoading(true);
  

  
}
else{
  console.log("error")
}


    
}
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={8} width={8} />
          Sign up
        </p>
        <div class="line"></div>
        <div className="container sign">
          <div className="btn-container response">
            <a href="/signin">
              {" "}
              <button className="btn">Login </button>
            </a>

            <button className="btn action-btn">Sign up</button>
          </div>
          <form >
          <div className="form response">
          <input
              className="form-item"
              type="text"
              placeholder="Name"

              value={name} onChange={(e)=>{setName(e.target.value)}} required
            ></input>
            <input
              className="form-item"
              type="email"
              placeholder="Email"
              value={email} onChange={(e)=>{setEmail(e.target.value)}}   required
            ></input>
            <input
              className="form-item"
              type="password"
              placeholder="Password"
              value={password} onChange={(e)=>{setpassword(e.target.value)}} required
            ></input>
             <input
              className="form-item"
              type="password"
              placeholder="Confirm Password"
              value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} required
            ></input>
            <button className="form-item action-btn create-btn" onClick={registeruser}  >CREATE</button>
          </div>

          </form>

          <div className="auth response">
            <p>Or Sign up using</p>
            <div className="auth-icon">
              <button className="auth-button">
                <img
                  src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                  height={32}
                  width={32}
                  alt="google-icon"
                />
              </button>
              <button className="auth-button">
                <img
                  src="https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
                  height={32}
                  width={32}
                  alt="apple-icon"
                />
              </button>
            </div>
            <div className="auth-alt">
              <p>Already have an account?</p>
              <a href="/signin">Login</a>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
export default SignUp;
