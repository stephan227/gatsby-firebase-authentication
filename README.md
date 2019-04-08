# Gatsby Firebase Authentication

This is a simplified demo to show how to authenticate Firebase in Gatsby.

This demo is derived from the [simple-auth](https://github.com/gatsbyjs/gatsby/tree/master/examples/simple-auth) gatsby example.

It uses Google Firebase for authentication. 

The UI Authentication is handled by [Firebaseui-web-react](https://github.com/firebase/firebaseui-web-react).


## Prerequisites
[Firebase] (https://github.com/firebase/firebase-js-sdk) version 5.5.3

NodeJS. The currently supported NodeJS versions for this firebase versions are 8.0.0 or greater, but smaller than 10.0.0.

Configured firebase Account with client ID.

## Installation
Replace the Firebase web API config in the following file `/src/services/firebase.js`

Run 
`
  $ npm install
  $ gatsby develop
`

## Deploy

Deploy the app using [Now](https://zeit.co/now)

Run
`
  $ now
`