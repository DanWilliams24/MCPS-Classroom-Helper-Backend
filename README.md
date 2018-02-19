This is one part of a 3 part project I have placed on GitHub. This specifically is for the Webserver. I created this backend, to manage and communicate with the front-end of this project, an IOS and Android app. This allows me to distribute information  It recieves neccessary info through requests and returns JSON as responses. These responses are used in the Android and IOS part of the app to deliver functionality. Overall this project is centralized around allowing students the ability to automate the process of searching the their grades for Z's and their MCPS Classroom for unfinished assignments seamlessly.

WORKFLOWS
 
    The workflow for PORTAL should look like this using Async:
     Prerequisite - Username & Password are provided in the get request and saved into
      a config file.
      (NOT SECURE) (UPDATE) (ENCRYPT)
 
     1. Phantom.js loads MCPS login page 
     2. Form on login page is filled out using JQuery to search the DOM.
     3. Modified form is posted, and resulting page is loaded.
     4. Javascript on page which allows grades to load onto the table from database is run,
      and modifies the DOM.
     5. Using an iterator, each grade button in the table is clicked, and the new page is 
     parsed and assignments, grades and other info are added to the JSON.
     6. After iterating through all available grades, the JSON is finalized and returned
      back to User as a response to their request.
     
 
    The workflow for CANVAS LMS API should look like this using HTTPS Requests:
     Prerequiste -  The code, client_id and client_secret are provided in the get request and saved
      into a config file.
      (NOT SECURE) (UPDATE) (ENCRYPT)
     
     1. Using the required params below, the webserver uses 'Request' to send a POST request
     to /login/oauth2/token.
         Params:
             grant_type - Values currently supported "authorization_code", "refresh_token"
             client_id - The client id for your registered application.
             client_secret - The client secret for your registered application.
             redirect_uri - If a redirect_uri was passed to the initial request in step 1,
              the same redirect_uri must be given here.
             
              CONDITIONALS
             Code: Required for grant_type 'authorization_code' -
              Required if grant_type is authorization_code. The code you received in a
              redirect response.
         
             Refresh_token: Required for grant_type 'refresh_token' -
              Required if grant_type is refresh_token. The refresh_token you received in a
              redirect response.
     2. Canvas Response is returned to user as a response to their request.
     NOTE: For more info on the Canvas LMS OAUTH FLOW GO HERE:
     https://canvas.instructure.com/doc/api/file.oauth.html 
     
