
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

  var database = firebase.database();

  function init() {

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
  let profile;
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
      profile = document.getElementById("profile")
      caste = document.querySelector('input[name="caste"]:checked').value;

    // Add the data to the database
    database.ref("users/").push({
      first_name: fname.value,
      last_name: lname.value,
      ucf_id: id.value,
      student_nid: nid.value,
      knights_cash_account: cash.value,
      library_account: library.value,
      date_of_birth: birthday.value,
      expiration_date: expiration.value,
      campus: campus.value,
      profile_picture: profile.value,
      caste: caste,
    });

    // Show a success message to the user
    alert("Record added successfully!");

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
    profile.value = "";
  });}
  window.addEventListener("load", init, false);