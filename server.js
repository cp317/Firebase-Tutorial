  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6ySrInpH3svhfDbZDIWc3dhHAOvZW2kk",
    authDomain: "studygroupfinder-d172b.firebaseapp.com",
    databaseURL: "https://studygroupfinder-d172b.firebaseio.com",
    projectId: "studygroupfinder-d172b",
    storageBucket: "studygroupfinder-d172b.appspot.com",
    messagingSenderId: "390539351889"
  };
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}


firebase.database().ref('/users/' + 5).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  console.log(username);
});

writeUserData(5, "Jake", "loft1830@mylaurier.ca");