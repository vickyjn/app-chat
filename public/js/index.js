var socket=io();
socket.on('connect',function(){
console.log("connected to server");

socket.emit('createMessage',{
  to:"Andrew",
  text:"it works for me"
});


socket.on('disconnect',function(){
console.log("disconnected from server");
});



socket.on('createMessage',function(message){
  console.log("new message",message);
});

socket.on('newMessage',function(message){
  console.log("new message",message);
});

});
