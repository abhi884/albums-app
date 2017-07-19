## Album App

Objective
=========
Album app is created using spotify api data. User should be able to see and navigate to albums.

Guidelines
==========
Run `npm install` followed by `npm run webpack` and `npm start` to display the current page on localhost:8080.

Getting spotify access_token by calling php file on server. It will expire after 1 hour.

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