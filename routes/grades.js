var express = require('express');
var router = express.Router();
var request = require('request');
var page = require('phantomjs');
var system = require('system');

router.get('/', function (req, res, next) {
    var url = 'https://portal.mcpsmd.org/public/home.html';


    res.send("Output JSON here");
});

module.exports = router;