import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dumble from './pics/dumble.jpeg'
import cycle from './pics/cycle.jpg'

const Signup = () => {

  const [email,setEmail]= useState("");
    const [pass,setPass] = useState("");
    const [name,setName] = useState("")
    let navigate = useNavigate();
    

    const submit = async(e)=>{
          e.preventDefault();
      if(email === "" || pass === ""){
        alert("enter all the fields")
      }
      else{
        try{
          // const res = await fetch("http://localhost:8000/routes/createUser",{
          //   mode:"cors",
          //   method:"POST",
          //   headers:{
          //     "Content-Type":"application/json",
          //     // 'Access-Control-Allow-Origin':''
          //   },
         
            // body:{
            //   name,email,pass
            // }

          // })

          const res =await axios.post('http://localhost:8000/routes/createUser', {
            name,email,pass
          })

          navigate("/", { replace: true });
        }catch(err){
          console.log(err);
        }
      }
  
    }

  return (
    <>
    <div className ='w-full text-white'  style={{display:'flex',flexDirection:'column',justifyContent: 'center',height:'800px',backgroundImage: `url(${cycle})`,backgroundRepeat:"no-repeat",width:'100%',backgroundSize: "cover"}}>
    <form className='w-1/3 p-16 mt-24 rounded-2xl' style={{border:'2px solid white', marginLeft:'450px'}}>
    <h1 className='text-3xl pb-6'>Signup</h1>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value)}}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPass(e.target.value);console.log(pass)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="password" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary bg-slate-700 text-white" onClick={submit}>Submit</button>
</form>
<div className='ml-96'>
    Already have an account?<Link to={'/login'}>signin</Link>
</div>
</div>
</>
  )
}

export default Signup