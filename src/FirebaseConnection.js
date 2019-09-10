import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBM6d8Cq5ZNplfPoEaccwKDqISqhEKkpe4",
    authDomain: "devsapp-a75a6.firebaseapp.com",
    databaseURL: "https://devsapp-a75a6.firebaseio.com",
    projectId: "devsapp-a75a6",
    storageBucket: "devsapp-a75a6.appspot.com",
    messagingSenderId: "110227912340",
    appId: "1:110227912340:web:6d4f02e538aaad81c26681"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;