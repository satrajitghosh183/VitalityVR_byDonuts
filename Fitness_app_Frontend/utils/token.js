const secret = "imsubhramoyandimaboy";
var jwt = require('jsonwebtoken');

const tokens = async(user,res,req)=>{
    var token = jwt.sign({_id:user._id},secret);
    res.status(200).cookie('token', token, {expire: 43200000 + Date.now()}).send(token);

}
module.exports = tokens