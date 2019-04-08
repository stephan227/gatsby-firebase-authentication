import * as firebase from 'firebase/app';

import 'firebase/auth';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyANGDjrAgRtnrr99fYf8K8SkcBhcXAZ-UY",
  authDomain: "sbreaker-d5010.firebaseapp.com",
  //databaseURL: "",
  projectId: "sbreaker-d5010",
  // storageBucket: "",
  // messagingSenderId: ""
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth;
  }
}

export default new Firebase();