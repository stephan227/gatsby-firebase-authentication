# Gatsby Firebase Authentication

This is a simplified demo to show how to authenticate Firebase in Gatsby V2. It uses Google Firebase for authentication, the UI workflow Authentication is handled by [Firebaseui-web-react](https://github.com/firebase/firebaseui-web-react).


## Demo

[Demo](https://gatsby-firebase-authentication.sbr22.now.sh/).


## Prerequisites
* [Gatsby] (https://github.com/gatsbyjs/gatsby) version greater than 2.0.

* [Firebase] (https://github.com/firebase/firebase-js-sdk) version 5.5.3

* The currently supported NodeJS versions for this firebase versions is greater than 8.0.0 and less than 10.0.0. 

* Configured firebase Account with client ID.

## Installation
Replace the Firebase web API config in the following file `/src/services/firebase.js`

Run 

    $ npm install

    $ gatsby develop


## Deploy

Deploy the app using [Now](https://github.com/zeit/now-cli).  

Run

    $ now

