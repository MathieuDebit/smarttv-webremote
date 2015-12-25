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

  socket.on('name', function(name){
    remote.config.host.name = name;
    socket.emit('name', 'New Name defined : ' + name)
    console.log('New Name defined : ' + name);
  });

  socket.on('key', function(key){
    remote.send(key, function callback(err){
      if (err) {
        console.log('Error ' + key + ' : ' + err);
        socket.emit('key', 'Error ' + key + ' : ' + err);
      } else {
        console.log('Key : ' + key);
        socket.emit('key', 'Key : ' + key);
      }
    });
  });

  socket.on('ping', function(){
    console.log('ping...');
    remote.isAlive(function(err){
      if (err) {
        socket.emit('ping', 'TV disconnected (error ' + err + ')');
        console.log('TV disconnected (error ' + err + ')');
      } else {
        socket.emit('ping', 'TV connected : ' + remote.config.ip);
        console.log('TV connected : ' + remote.config.ip);
      }
    });
  })
});
