const express = require("express");
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
var cookieParser = require('cookie-parser');
require('./connect.js');
const port = 8000;
const user = require("./routes/userRoute");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
 app.use(cors({origin:"http://localhost:3000"}
 ));
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use('/routes',user); 
app.listen(port,()=>{
    console.log(`Running in port ${port}`);
})
