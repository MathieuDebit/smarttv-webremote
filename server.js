var express = require('express');
var http = require('http');
var socket = require('socket.io');
var SamsungRemote = require('samsung-remote');

var app = express();
var port = process.env.PORT || 8080;

app.disable('etag');

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = socket.listen(server);

io.sockets.on('connection', function(socket){
  console.log('New client connected');
  socket.emit('welcome', 'hello! You are now connected');

  var remote = new SamsungRemote({
    ip: '192.168.1.1'
  });

  socket.on('ip', function(ip){
    remote.config.ip = ip;
    console.log('New IP defined : ' + ip);
    socket.emit('ip', 'New IP defined : ' + ip);
  });
});
