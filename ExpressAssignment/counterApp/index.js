const express = require('express');
const app = express();
const port = 3060;
const hostname ='localhost';
const counter = 1;
app.get('/',(req,res)=>{
      res.send({Counter:counter});
})
app.get('/increment',(req,res)=>{
    res.send({Counter:counter+1});
})
app.get('/decrement',(req,res)=>{
    res.send({Counter:counter-1});
})
app.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})