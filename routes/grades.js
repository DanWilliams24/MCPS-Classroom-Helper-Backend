//import { isNumber } from 'util';
//var isNumber = require('util.isNumber')
var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');
var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true})
var path = require('path');
var url = require('url');
var fs = require('fs');


router.get('/', function (req, res, next) {
  var access_token = '?access_token=2873~OAXT1qIVPKRgCBmn6YI32BlhZhvaF7lZZTm1SvasfeCR2KbsFhatDYSLloJDxKY4';
  var base_uri = 'https://mcpsmd.instructure.com'
  var courses_url = '/api/v1/courses';
  var announcements_url = '/';
  var result = base_uri + courses_url + access_token;
  console.log(result);
  var json = {
    "page": "Student and Parent Sign In",
    "copyright": "Copyright © 2005-2016 PowerSchool Group LLC and/or its affiliate(s). ",
    "htmlData": "hello"
}
  /* request(result).pipe(fs.createWriteStream('courseData.json')
  .on('close', function(){
    var urlFrags = __dirname.split('/');
    console.log(__dirname.split('/'));
    var formedURL = '';
    for(let i = 1; i < urlFrags.length-1; i++ ){
      const element = urlFrags[i];
      formedURL += '/' + element;
    } */
    var urlFrags = __dirname.split('/');
    console.log(__dirname.split('/'));
    var formedURL = '';
    for(let i = 1; i < urlFrags.length-1; i++ ){
      const element = urlFrags[i];
      formedURL += '/' + element;
    } 
    res.sendFile('courseData.json',{root: formedURL});
    //res.send(json);
  //}));

  
});

module.exports = router;