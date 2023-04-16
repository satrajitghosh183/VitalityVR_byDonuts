import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Cookies from 'js-cookie';
import { useState } from "react";
import download from './pics/download.jpeg';
import black_guy from './pics/black_guy.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false); 
  const tokenData = Cookies.get('token'); 
  const submit = async()=>{
  
    navigate('/download')
    
    
  }

  const submit2 = async()=>{
  
    // const tokenData = Cookies.get('token');
    console.log(tokenData)
    
    navigate('/strava');
  }

  const func = ()=>{
    Cookies.remove('token');
    navigate("/signup")

  }

  // const click = ()=>{
  //   navigate("/strava");
  // }
  return (
    <>
    <div style={{backgroundImage: `url(${black_guy})`,backgroundRepeat:"no-repeat",width:'100%',backgroundSize: "cover"}}>
    <div style={{marginBottom:"70px"}}>
    <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4" >
    <h5 className="text-white h4">Collapsed content</h5>
    <span className="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav className="navbar navbar-dark bg-blend-screen text-white">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</div>
    <div style={{display:"flex",columnGap:"50px",justifyContent:"center",backgroundColor:"transparent",padding:"45px"}}>
    <div className="card border-light mb-3 text-violet-50" style={{maxWidth: "18rem",backgroundColor:'transparent'}}>
  <div className="card-header"><Link to={'/signup'}>Signup</Link></div>
  <div className="card-body">
    <h5 className="card-title">Signup to our page</h5>
    <p className="card-text">Signup/Signin to get the entire experience</p>
  </div>
  </div>

<div className="card border-light mb-3 text-violet-50" style={{maxWidth: "18rem",backgroundColor:'transparent'}}>
<div className="card-header"><button onClick={submit} disabled={!tokenData} >Download APK</button></div>
<div className="card-body">
  <h5 className="card-title">Click the above title to download</h5>
  <p className="card-text">Download the apk from here to experience with oculus quest</p>
</div>
</div>

<div className="card border-light mb-3 text-violet-50" style={{maxWidth: "18rem",backgroundColor:'transparent'}}>
<div className="card-header"><button disabled={!tokenData} onClick={submit2}>Connect to different platforms</button></div>
<div className="card-body">
  <h5 className="card-title">Connect to Strava</h5>
  <p className="card-text">Connect to Strava to get real time data visualization</p>
</div>
</div>

<div className="card border-light mb-3 text-violet-50" style={{maxWidth: "18rem",backgroundColor:'transparent'}}>
<div className="card-header"><Link to={'/about'}>About us</Link></div>
<div className="card-body">
  <h5 className="card-title">Know us!</h5>
  <p className="card-text">Get to know our conttributions and prospects of the project</p>
</div>
</div>

</div>
<button className='text-white p-1 ml-20' style={{marginTop:"350px",marginLeft:"50px",marginBottom:"35px",border:'2px solid white'}} onClick={func}>logout</button>
</div>
</>
  )
}

export default Home