import React, { createContext, useContext, useEffect, useState } from 'react'
const Info = createContext();
const InfoContext = ({children})=>{
    const [client_id,setId] = useState("");
    const [code,setCode] = useState("");
    const [client_secret,setSecret] = useState("");
    const [refresh_token,setrefresh_token] = useState("");
    const [access_token,setaccess_token] = useState("");
    const [name,setName] = useState("");
    const [distance,setDistance] = useState("");
    const [time,setTime] = useState("");
    const [elevation,setElevation] = useState("");
    const [type,setType] = useState("");
    const [date,setDate] = useState("");
    const [avgSpeed,setSpeed] = useState("");
    const [maxSpeed,setMaxSpeed] = useState("");
    const [timezone,setTimezone] = useState("");
    const [data,setData] = useState([]);

    return(
        <>
        <Info.Provider value={{client_id,setId,code,setCode,client_secret,setSecret,refresh_token,setrefresh_token,access_token,setaccess_token,name,setName,distance,setDistance,time,setTime,elevation,setElevation,type,setType,date,setDate,avgSpeed,setSpeed,maxSpeed,setMaxSpeed,timezone,setTimezone,data,setData}}>
            {children}
        </Info.Provider>
        </>
    )
}
export default InfoContext
export const InfoState=()=>{
    return useContext(Info);
} 