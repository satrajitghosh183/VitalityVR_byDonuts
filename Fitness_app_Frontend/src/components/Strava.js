// import React, { useState } from 'react'
 import { useNavigate } from "react-router-dom";
import React, { useEffect,useContext} from 'react'
import axios from 'axios';
import { InfoState } from './Context';

const Strava = () => {
  const navigate = useNavigate();
  const {client_id,setId,code,setCode,client_secret,setSecret,refresh_token,setrefresh_token,access_token,setaccess_token,distance,setDistance,time,setTime,elevation,setElevation,type,setType,date,setDate,avgSpeed,setSpeed,maxSpeed,setMaxSpeed,timezone,setTimezone,name,setName,data,setData} = InfoState();
  const submit = ()=>{
    window.location.replace(`http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all`);
  
  }
  const func = ()=>{
    axios.post('http://localhost:8000/routes/strava_authorize', {
           client_id,client_secret,code
          }).then((response) => {
             
            setrefresh_token(response.data.refresh_token);
             setaccess_token(response.data.access_token);
             setDistance(response.data.data2[0].distance);
             setTime(response.data.data2[0].moving_time);
             setElevation(response.data.data2[0].total_elevation_gain);
             setType(response.data.data2[0].type);
             setDate(response.data.data2[0].start_date);
             setSpeed(response.data.data2[0].average_speed);
             setMaxSpeed(response.data.data2[0].max_speed);
             setTimezone(response.data.data2[0].timezone);
             setName(response.data.data2[0].name);
              setData(response.data.data2);
              console.log(name);
              console.log(refresh_token)
          })
  }
   useEffect(() => {
     console.log(distance,time,elevation,type,date,avgSpeed,maxSpeed,timezone,name)
     console.log(data)
     if(access_token){
      navigate("/map")
     }
     
    
   }, [distance,time,elevation,type,date,avgSpeed,maxSpeed,timezone,name]);
  return (
    <>
    <div className="w-96 p-14" style={{display:'flex',flexDirection:'column',justifyItems: 'center', border:'2px solid',marginLeft:'500px', marginTop:'200px', height:'500px'}}>
    authentication
    <input style={{border:'2px solid black'}} type="text" onChange={(e)=>setId(e.target.value)}/>
    <button onClick={submit}>submit</button><br></br>

    id
    <input style={{border:'2px solid black'}} type="text" onChange={(e)=>{setId(e.target.value)}}/>
    

    code
    <input style={{border:'2px solid black'}} type="text" onChange={(e)=>{setCode(e.target.value)}}/>

    Secret<input style={{border:'2px solid black'}} type="text" onChange={(e)=>{setSecret(e.target.value)}}/>
    <button onClick={func}>submit</button>
    </div>
    </>
  )
}

export default Strava