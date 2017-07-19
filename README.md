## Album App

Objective
=========
Album app is created using spotify api data. User should be able to see and navigate to albums.

Guidelines
==========
Run `npm install` followed by `npm start` to display the current page on localhost:8080.

Modify the `API_KEY` constant in index.js for data.
API_KEY is the access_token of spotify web apis.

Use postman or curl to get access_token
Used Client Credentials Flow for getting access_token. It will expire every hour. Follow below steps for getting access_code.

1. Your application requests authorization
The request is sent to the /api/token endpoint of the Accounts service:

POST https://accounts.spotify.com/api/token
The request will include parameters in the request body:

REQUEST BODY PARAMETER 			VALUE 
grant_type 						Required. Set it to “client_credentials”. 


The header of this POST request must contain the following parameter:

HEADER PARAMETER 				VALUE 
Authorization 					Required. Base 64 encoded string that contains the client ID and client secret key. 
								The field must have the format: Authorization: Basic <base64 encoded client_id:client_secret>

For example:

curl -X "POST" -H "Authorization: Basic ZjM4ZjAw...WY0MzE=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
{
   "access_token": "NgCXRKc...MzYjw",
   "token_type": "bearer",
   "expires_in": 3600,
}

change API_KEY value to response `access_token`.


User Stories
============
* User should see 10 albums initially
* Each Album should display:
    * Album Photo
    * Album Name
    * Button to open album
* On scrolldown to end more albums should be loaded
* On search of artists, albums should be updated correspondingly
* App should be responsive