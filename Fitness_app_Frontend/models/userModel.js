const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter ur name"]
    },
    email:{
        type:String,
        required:[true,"Please enter ur email"]
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    }
})
const User = mongoose.model("User",UserSchema);
module.exports=User;