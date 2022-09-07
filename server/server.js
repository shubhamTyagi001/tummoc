const express = require('express');
const app = express();



const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/user',{
    useNewUrlPaeser:true,
    userUnifiedTopology: true
},()=>{
 console.log("connected");
});

 app.use(bodyParser.json());


const port = process.env.port || 3001;
app.listen(port,()=>{
 console.log('server run');
})