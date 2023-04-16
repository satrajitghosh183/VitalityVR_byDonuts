import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import dumble from './pics/dumble.jpeg'
import cycle from './pics/cycle.jpg'
const Login = () => {

    const [email,setEmail]= useState("");
    const [password,setPass] = useState("");
    let navigate = useNavigate();
    const submit = async(e)=>{
      if(email === "" || password === ""){
        alert("enter all the fields")
      }
      else{
       try{ 
       axios.post('http://localhost:8000/routes/loginUser',{
        email,password
      }).then((response) => {
        console.log(response.data);
        Cookies.set('token', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
      alert('logged in')
      navigate("/", { replace: true });

      }catch(err){
          console.log(err);
          alert('login failed')
      }
      }
      e.preventDefault();
      
    }
  return (
    <>
    <div className ='w-full text-white'  style={{display:'flex',flexDirection:'column',justifyContent: 'center', height:'800px',backgroundImage: `url(${cycle})`,backgroundRepeat:"no-repeat",width:'100%',backgroundSize: "cover"}}>
    <form className='w-1/3 p-16 mt-36 text-white rounded-2xl' style={{border:'2px solid white', marginLeft:'450px'}}>
      <h1 className='text-3xl pb-6'>Signin</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPass(e.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary bg-slate-700 text-white" onClick={submit}>Submit</button>
</form>
<div className='ml-96'>
    New to here?<Link to={'/signup'}>signup</Link> 
</div>

</div>
</>
  )
}

export default Login