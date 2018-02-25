//import { isNumber } from 'util';
//var isNumber = require('util.isNumber')
var express = require('express');
var router = express.Router();
var request = require('request');
var Nightmare = require('nightmare'),
  nightmare = Nightmare({
    show: true
  });
var async = require('async');

router.get('/', function (req, res, next) {
    /* if(!req.query.factorial === null){
        var number = req.query.num;
        var answer = factorial(number);
        res.send('Answer: ' + answer);
    }else if((!req.query.a ===undefined) && (!req.query.x === undefined)){ 
        
    }
    var factorial = function (num) {
        if (num === 0 ) {
            return 1;
        } else {
            return num*factorial(num - 1);
        }
    }
    var logarithm = function(val){
        return Math.log(val);
    }
    var changeOfBase = function(a, x){
        return Math.log(x)/Math.log(a);
    }
    if(req.query.x > 0){
        res.send('Answer: ' + changeOfBase(req.query.a,req.query.x));
    }else{
        res.send('Answer: ' + logarithm(req.query.val));
    }
    */

   nightmare
   //load a url
   .goto('https://portal.mcpsmd.org/public/')
   //simulate typing into an element identified by a CSS selector
   //here, Nightmare is typing into the search bar
   .type('input[name="account"]', '341086')
   .type('input[name="pw"]', 'Ryeh5070')
   //click an element identified by a CSS selector
   //in this case, click the search button
   .click('#btn-enter')
   //wait for an element identified by a CSS selector
   //in this case, the body of the results
   .wait('#main')
   //execute javascript on the page
   //here, the function is getting the HREF of the first search result
   .evaluate(function() {
     res.send(document.body.innerHTML);
     return document.body.innerHTML;
   })
   //end the Nightmare instance along with the Electron instance it wraps
   .end()
   //run the queue of commands specified, followed by logging the HREF
   .then(function(result) {
     res.send(result);
   })
   //catch errors if they happen
   .catch(function(error){
     console.error('an error has occurred: ' + error);
   });
    
    //res.send("Output JSON here");
});

module.exports = router;