var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 8000;

server.listen(port, function(){
  console.log('Listening on port: ' + port);
});

app.use(express.static(__dirname + '/'));
