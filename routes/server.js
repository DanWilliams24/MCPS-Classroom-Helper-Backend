var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var router = express.Router();
var url = require('url');
router.get('/', function (req, res, next) {
    
    var url = 'https://portal.mcpsmd.org/public/';
    var json = { page: "Default", copyright: "Default", htmlData: "Sample" };
    //request(url).pipe(fs.createWriteStream('website.html'));

    request(url, function (error, response, body) {
        var page, copyright, htmlData;
        json.page = "Hello";
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        const $ = cheerio.load(body);
            
        
        //1
        htmlData = $('#container').html();
        json.htmlData = htmlData;
        
        //2
        page = $('#container #content h1').text();
        page  = page.trim();
        json.page = page; 

        

        //2
        copyright = $('#container #footer').text();
        json.copyright = copyright.trim();
 
        

        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function

        fs.writeFile('./output.json', JSON.stringify(json, null, 4), function (err) {

            console.log('File successfully written! - Check your project directory for the output.json file');
            //res.send(err)
        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
       res.send(JSON.stringify(json, null, 4));

    }); 
    
    console.log(json.copyright);
    console.log(json.page);
   // console.log(json.htmlData);
})

module.exports = router;
