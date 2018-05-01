const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,"../public");

const port=process.env.PORT || 3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log("new user connected");

socket.on('disconnect',()=>{
  console.log("disconnected from server");
});


socket.on('createMessage',function(message){
  console.log("create message",message);
});

socket.emit('newMessage',{
  from:"John",
  text:"See you then",
  createdAt:123123
});



});


server.listen(port,()=>{
console.log(`server is up on port ${port}`);
});
