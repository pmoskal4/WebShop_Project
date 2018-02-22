import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBl6EOzknHtkrxhFovlki9rNXNu51zdeuA",
  authDomain: "webshopproject-241b3.firebaseapp.com",
  databaseURL: "https://webshopproject-241b3.firebaseio.com",
  projectId: "webshopproject-241b3",
  storageBucket: "webshopproject-241b3.appspot.com",
  messagingSenderId: "485158305853"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database().ref('/products');

database.once('value', snap => {
  const itemsData = snap.val()
});

export default database;