const express = require('express');
const app = express();
const port = 3210;
const hostname ='localhost';
app.get('/',(req,res)=>{
      res.send({Random:Math.floor(100*(Math.random()))});
})

app.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})