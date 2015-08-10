var app = require("express");
var server = require("http").Server(app);
var io = require('socket.io')(server);
var timerID = 1;

var timers = {};

io.on('connection', function(socket) {
  console.log('connected!');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('timer selected', function(timer) {
    //connect user to a new channel
    var channelName = 'timer'+timerID.toString();
    socket.join(channelName);
    timerID++;

    io.to(channelName).emit('timer connect', channelName);

    console.log('timer selected!');
    console.log(timer);
    timers[channelName] = timer;
    console.log(timers);
    io.to(channelName).emit('joined', timer);
  });

  socket.on('timer join', function(channelID) {
    console.log('attempting to join timer');
    //console.log(data.channel);
    //console.log(data.socket);
    //var socket = data.socket;
    //var channel = data.channel.toString();

    socket.join(channelID);

    io.to(channelID).emit('alert', 'another user has joined!');
    io.to(channelID).emit('joined', timers[channelID]);
  });

  socket.on('start timer', function(channelID) {
    console.log('starting timer!');
    io.to(channelID).emit('timer started');
  });
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
