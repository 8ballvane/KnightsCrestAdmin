
// Firebase configuration
import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "firebase/database";

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
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  // Get a reference to the Firebase Realtime Database
  const dbRef = ref(database);

  function init() {
    // Get the UCF ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const ucfid = urlParams.get('ucfid');
    // Fill in the form fields with the user data
    const firstNameField = document.getElementById('firstName');
    const cashField = document.getElementById('cash');
    const dobField = document.getElementById('dob');
    const campusField = document.getElementById('campus');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');
    const userRef = child(dbRef, `users/${ucfid}`);
    const userSnapshot = get(userRef);
    userSnapshot.then(snapshot => {
      const userData = snapshot.val();
      firstNameField.value = userData.firstName;
      cashField.value = userData.cash;
      dobField.value = userData.dob;
      campusField.value = userData.campus;
    });
    // Add an event listener to the "Update" button
    updateButton.addEventListener('click', () => {
      console.log("update");
      const newData = {
        firstName: firstNameField.value,
        cash: cashField.value,
        dob: dobField.value,
        campus: campusField.value
      };
      database.ref(userRef).set(newData)
      .then(() => {
        console.log('Record updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating record:', error);
      });
      /*
      update(userRef, newData).then(() => {
        alert('User data updated successfully!');
      }).catch(error => {
        alert(`Error updating user data: ${error.message}`);
      });
      */
    });
    

    // Add an event listener to the "Delete" button
    deleteButton.addEventListener('click', () => {
      userRef.remove().then(() => {
        alert('User account deleted successfully!');
        window.location.replace('index.html');
      }).catch(error => {
        alert(`Error deleting user account: ${error.message}`);
      });
    });
  }
  window.addEventListener("load", init, false);

  /*
  function init() {
    document.myform.addEventListener("load", display, false);
    document.myform.addEventListener("submit", update, false);


    //var ucfid = decodeURIComponent(window.location.search.substr(1)).split("=")[1];
    //var userRef = database.ref('users').orderByChild("ucf_id").equalTo(ucfid);
   // userRef.once('value', function(snapshot) {
   // if (snapshot.exists()) {
   // var userData = snapshot.val()[ucfid];

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
      var userData = snapshot.val()[ucf_id];
     console.log(userData);
    
    });
  }

  function remove() {
    console.log("removed");
    // Get the form elements
  let fname;
  let lname;
  let id;
  let nid;
  let cash;
  let library;
  let birthday;
  let expiration;
  let campus;
  let caste;

  
  // Listen for the form submit event
  document.myform.addEventListener("submit", function(event) {
    event.preventDefault();
  // Get the form elements
  fname = document.getElementById("fname");
  lname = document.getElementById("lname");
  id = document.getElementById("id");
  nid = document.getElementById("nid");
  cash = document.getElementById("cash");
  library = document.getElementById("library");
  birthday = document.getElementById("birthday");
  expiration = document.getElementById("expiration");
  campus = document.getElementById("campus");
  caste = document.querySelector('input[name="caste"]:checked').value;

// Add the data to the database
database.ref("users/").pop({
  first_name: fname.value,
  last_name: lname.value,
  ucf_id: id.value,
  student_nid: nid.value,
  knights_cash_account: cash.value,
  library_account: library.value,
  date_of_birth: birthday.value,
  expiration_date: expiration.value,
  campus: campus.value,
  caste: caste,
});

 // Show a success message to the user
 alert("Record removed successfully!");

 // Reset the form fields
 fname.value = "";
 lname.value = "";
 id.value = "";
 nid.value = "";
 cash.value = "";
 library.value = "";
 birthday.value = "";
 expiration.value = "";
 campus.value = "";
});

}

  window.addEventListener("load", init, false);
  */