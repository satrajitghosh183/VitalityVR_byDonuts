const secret = "imsubhramoyandimaboy";
var jwt = require('jsonwebtoken');

exports.authentication=async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        res.status(400).send('User not found!')
        console.log('token:',token);
    }
    // const verify = await jwt.verify(token,secret);
    // if(verify){
    //     next();
    //     res.send("authorized");
    // }
    next();
   
    
}