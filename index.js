var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');

// Quando colocar o gulp apenas será o public
app.use(express.static('public'));
app.use(express.static('bower_components'));

// API endpoint para retornar que utilizadores estão conectados de momento
app.get('/activeUsers', function (req, res) {
    var socketIdsArray = Object.keys(io.sockets.connected);

    var connectedSockets = _.map(socketIdsArray, function (socketId) {
        return io.sockets.connected[socketId].handshake.query.username;
    });

    res.json(connectedSockets);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
    let socketUser = socket.handshake.query.username;
    console.log(socketUser + ' connected');

    socket.on('disconnect', function() {
        console.log(socketUser + ' disconnected');
        socket.broadcast.emit('user left', socketUser);
    });

    socket.on('clear canvas', function () {
        socket.broadcast.emit('clear canvas');
    });

    socket.on('color update', function (color) {
        socket.broadcast.emit('color update', color);
    });

    socket.on('tool update', function (tool) {
        socket.broadcast.emit('tool update', tool);
    });

    socket.on('size update', function (size) {
        socket.broadcast.emit('size update', size);
    });

    socket.on('press', function(picto) {
        socket.broadcast.emit('press', picto);
    });

    socket.on('release', function(picto) {
        socket.broadcast.emit('release', picto);
    });

    socket.on('chat message', function (message) {
        socket.broadcast.emit('chat message', message);
    })

    socket.broadcast.emit('new user', socketUser);
});

http.listen(process.env.PORT || 3000, function() {
    console.log('===== Server is running =====');
});