var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Server is running');
});