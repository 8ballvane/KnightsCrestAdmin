// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI4OxpPSYzATmb7qu21_4GgkW4h9-KXOY",
    authDomain: "knightscrest.firebaseapp.com",
    projectId: "knightscrest",
    storageBucket: "knightscrest.appspot.com",
    messagingSenderId: "595850728642",
    appId: "1:595850728642:web:7885d4b5387a97b91d975b",
    measurementId: "G-M4V6P20S2R",
    databaseURL: "https://knightscrest-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();

  function init() {
    document.myform.addEventListener("load", display, false);
    document.myform.addEventListener("submit", update, false);

    var ucfid = decodeURIComponent(window.location.search.substr(1)).split("=")[1];
    var userRef = database.ref('users').orderByChild("ucf_id").equalTo(ucfid);
    userRef.once('value', function(snapshot) {
    if (snapshot.exists()) {
    var userData = snapshot.val()[ucfid];
    var firstName = snapshot.val()[first_name]
    var lastName = snapshot.val()[last_name]

  }
});
  }

  function display() {
    
      // Display the user's data on the page
      // var firstName = document.querySelector('#firstName');
      // var lastName = document.querySelector('#lastName');
      // var nid = document.querySelector('#nid');
      // var ucfid = document.querySelector('#ucfid');
      // var campus = document.querySelector('#campus');
      // var cashNumber = document.querySelector('#cash');
      // var libraryNumber = document.querySelector('#library');
    // var dob = document.querySelector('#dob');

    // Get the form values
      var firstName = document.querySelector('#firstName').value;
      var lastName = document.querySelector('#lastName').value;
      var nid = document.querySelector('#nid').value;
      var ucfid = document.querySelector('#id').value;
      var campus = document.querySelector('#campus').value;
      var cashNumber = document.querySelector('#cash').value;
      var libraryNumber = document.querySelector('#library').value;
      var dob = document.querySelector('#birthday').value;
  }

  function update() {
    // Get the UCF ID from the URL query parameter
    var urlParams = new URLSearchParams(window.location.search);
    var ucfid = urlParams.get('ucfid');
    
    // Get a reference to the user's data in Firebase
    var userRef = database.ref('users').orderByChild('ucf_id').equalTo(ucfid);
    
    // Fetch the user's data from Firebase
    userRef.once('value', function(snapshot) {
      // Get the user's data
      var userData = snapshot.val()[ucfid];
      
      // Display the user's data on the page
      var firstName = document.querySelector('#firstName');
      var lastName = document.querySelector('#lastName');
      var nid = document.querySelector('#nid');
      var ucfid = document.querySelector('#ucfid');
      var campus = document.querySelector('#campus');
      var cashNumber = document.querySelector('#cash');
      var libraryNumber = document.querySelector('#library');
      var dob = document.querySelector('#dob');
    
    });
  }

  window.addEventListener("load", init, false);