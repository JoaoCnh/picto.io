var express = require('express');

var router = express.Router();

router.use('/users', require('./usersController'));

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;