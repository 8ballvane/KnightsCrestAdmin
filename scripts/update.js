// Firebase configuration
import { doc, updateDoc, deleteField, getDatabase, ref, child, get } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4OxpPSYzATmb7qu21_4GgkW4h9-KXOY",
  authDomain: "knightscrest.firebaseapp.com",
  databaseURL: "https://knightscrest-default-rtdb.firebaseio.com",
  projectId: "knightscrest",
  storageBucket: "knightscrest.appspot.com",
  messagingSenderId: "595850728642",
  appId: "1:595850728642:web:7885d4b5387a97b91d975b",
  measurementId: "G-M4V6P20S2R"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


  // Get a reference to the Firebase Realtime Database
  const dbRef = ref(getDatabase());

  function init() {
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
