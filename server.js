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
