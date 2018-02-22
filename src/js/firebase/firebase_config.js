import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBl6EOzknHtkrxhFovlki9rNXNu51zdeuA",
  authDomain: "webshopproject-241b3.firebaseapp.com",
  databaseURL: "https://webshopproject-241b3.firebaseio.com",
  projectId: "webshopproject-241b3",
  storageBucket: "webshopproject-241b3.appspot.com",
  messagingSenderId: "485158305853"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database().ref('/products');

export default database;