const http = require('http');

const express = require('express');


const app = express();

app.use((req,res,next) =>{ //use( ()=>{} )
    console.log('In This Middleware');
    next();//this line allow the request to continue to the next middleware
});


app.use((req,res,next) =>{ //use( ()=>{} )
    console.log('In This another Middleware');
})


const server = http.createServer(app);


server.listen(7575)