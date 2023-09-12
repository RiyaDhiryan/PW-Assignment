const http = require('http');
const port = 3090;
const hostname = 'localhost';
 const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.setHeader('content-type','application/json');
    res.statusCode = 200;
    res.end('Welcome to Men and Women Dummy Data');
    }
    else if(req.url=='/men'){
        res.setHeader('content-type','application/json');
        res.statusCode = 200;
        console.log('Send 10 products Data for Men');
    }
    else if(req.url=='/women'){
        res.setHeader('content-type','application/json');
        res.statusCode = 200;
        res.end('Send 10 products Data for Women');
    }
    else{
        res.setHeader('content-type','application/json');
        res.statusCode = 500;
        res.end('Page Not Found');
    }
});
server.listen(port,()=>{
    console.log(`Server is running on ${hostname}:${port}`);
})

