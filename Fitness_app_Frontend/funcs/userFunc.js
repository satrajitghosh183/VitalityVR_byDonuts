const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const tokens = require('../utils/token');
const fetch = require('node-fetch');

// Creating a user

exports.createUser = async(req,res)=>{
    const{name,email,pass}=req.body;
    console.log('recieved');
try{
    if(!name || !email || !pass){
        res.status(400).send("Enter all fields correctly");
    }
     let oldUser =await User.findOne({email});

     if(oldUser){
        res.status(400).send("User already exist");
     }else{

      
        const salt=await bcrypt.genSalt(10);
        const encryptedPass=await bcrypt.hash(pass,salt);


    let user = User.create({
        name:req.body.name,
        email:req.body.email,
        password:encryptedPass
    })
    console.log(user);
    res.status(200).json(req.body);
}
}catch{
    (e)=>{
        console.log(e);
    }
}
}

//login user

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;
    console.log("reached");
    if(!email || !password){
        res.status(400).send("Enter all the credentials");
    }
    const oldUser = await User.findOne({email});

    if(!oldUser){
        res.status(400).send("User not found");
    }
    const verify = await bcrypt.compare(password,oldUser.password);
    // console.log(oldUser.password);
    if(!verify){
        res.status(404).json({user:'not found'})
        
    }else{
        tokens(oldUser,res,req);
       
    }
}

//logout user

exports.logoutUser = async(req,res)=>{
    res.clearCookie('token');
    res.send("Cookie cleared");
}

//Connecting to strava

exports.connect_Strava = async(req,res)=>{
    const client_id = '104711';
    const client_secret = '071ef252fced564f366637cf45734decaf4e9271';
    const code = 'ae394bf4489b7abf2bd14dfc17a598031466cd11';

    // const result = await fetch('https://www.strava.com/api/v3/athlete/activities?access_token=e9fd0ab39cee9dae16ac6308cb19e2331e85e62a',{
    //     method:"GET",
    //          headers:{
    //          "Content-Type":"application/json",
    //          "Accept":"*/*"
    //           // 'Access-Control-Allow-Origin':''
    //          },
    // })
    // if(result){
    //     await res.json(result);
    // }

    const access_token = "0cbf7d891c0f30c163b597a8eec0a000ace1eb65";
    const url = "https://www.strava.com/api/v3/athlete/activities?access_token=" + access_token;
    fetch(url)
  .then(response => response.json())
  .then(data => res.json({
    success:true,
    data
  }))
  .catch(error => console.error(error));
  console.log(window.location.href);
  
}


// authorization

exports.authorize = async(req,res)=>{
    const {client_id,client_secret,code} = req.body;
     await fetch(`https://www.strava.com/oauth/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code`,{
         method:"POST",
              headers:{
              "Content-Type":"application/json",
              },
              body:JSON.stringify({client_id,client_secret,code})
     }).then(response => response.json())
     .then(data => { const { access_token, refresh_token } = data;
        fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${data.access_token}`)
            .then(response => response.json()).then(
                data2=>res.json({
                    success:true,
                    data2,
                    access_token,
                     refresh_token
                })
            )})

    // var currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // console.log(currentUrl);
    // const newUrl = new URL(url);
    // const code = new URLSearchParams(url.search).get(code);
    // console.log(code);

}