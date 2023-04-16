import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';
import polyline from '@mapbox/polyline';
import { InfoState } from './Context';
import stairs from './pics/stairs.png';
import dist2 from './pics/dist2.png';
import speed2 from './pics/speed2.png';
import max2 from './pics/max2.png';
import map from './pics/map.jpeg';
import jump from './pics/jump.jpg';
import stairs2 from './pics/stairs2.png';
import fire2 from './pics/fire2.png'
function Map() {
  const {client_id,setId,code,setCode,client_secret,setSecret,refresh_token,setrefresh_token,access_token,setaccess_token,distance,setDistance,time,setTime,elevation,setElevation,type,setType,date,setDate,avgSpeed,setSpeed,maxSpeed,setMaxSpeed,timezone,setTimezone,name,setName,data,setData} = InfoState();
  const [nodes, setNodes] = useState([]);

  const clientID = client_id;
  const clientSecret = client_secret;
  const refreshToken = refresh_token;
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`

  useEffect(() => {
    async function fetchData() {
      
       const stravaAuthResponse = await axios.all([
         axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
       ]);

       const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      //  const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${access_token}`);
       console.log(stravaActivityResponse.data[0]);
      const polylines = [];
      for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
        const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
        const activity_name = stravaActivityResponse.data[i].name;
        polylines.push({ activityPositions: polyline.decode(activity_polyline), activityName: activity_name });
      }

      // for (let i = 0; i < data.length; i += 1) {
        // const activity_polyline = data[i].map.summary_polyline;
        // const activity_name = data[i].name;
        // polylines.push({ activityPositions: polyline.decode(activity_polyline), activityName: activity_name });
        
      // }
      console.log(polylines)
      
      setNodes(polylines);
    }

    fetchData();
  }, []);

  return (
    <>
    <div className='bg-slate-600'>
    <Link to={'/'}><div>&#x2190;</div></Link>
    <MapContainer center={[42.585444, 13.257684]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {nodes.map((activity, i) => (
        <Polyline key={i} positions={activity.activityPositions}>
          <Popup>
            <div>
              <h2>{"Name: " + activity.activityName}</h2>
            </div>
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
    {/* <h1 className='text-5xl font-semibold font-serif'>{name}</h1> */}
    <h1 className='font-semibold font-serif ml-80 text-xl'>Duration:{time}</h1>
    {/* <h1 className='text-5xl font-semibold font-serif'>Date:{date}</h1> */}
    <h1 className='font-semibold font-serif ml-80 text-xl'>{timezone}</h1>
    {/* <h1 className='text-5xl font-semibold font-serif'>{type}</h1> */}
    <div className='space-x-40 p-24' style={{display:'flex',flexDirection:'row'}}>
    <div style={{display:'flex',flexDirection:'column'}}><h1 className='text-5xl font-semibold font-serif'>{distance}</h1><br></br><br></br>distance<br></br><img className='w-8 h-8' src={dist2}/></div>
    
    <div style={{display:'flex',flexDirection:'column'}}><h1 className='text-5xl font-semibold font-serif'>{elevation}</h1><br></br><br></br>elevation<br></br><img className='w-8 h-8' src={stairs2}/></div>
   
    <div style={{display:'flex',flexDirection:'column'}}><h1 className='text-5xl font-semibold font-serif'>{avgSpeed}</h1><br></br><br></br>avg speed<br></br><img className='w-8 h-8' src={speed2}/></div>
   
    <div style={{display:'flex',flexDirection:'column'}}><h1 className='text-5xl font-semibold font-serif'>{maxSpeed}</h1><br></br><br></br>max speed<br></br><img className='w-8 h-8' src={max2}/></div>
    <div style={{display:'flex',flexDirection:'column'}}><h1 className='text-5xl font-semibold font-serif'>200</h1><br></br><br></br>calories<br></br><img className='w-8 h-8' src={fire2}/></div>
   
    
    
    </div>
    </div>
    </>
  );
}

export default Map;
