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

var form = document.querySelector('form[name="myform"]');
var table = document.querySelector('#resultsTable tbody');

form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

// Get the form values
var firstName = document.querySelector('#fname').value;
var lastName = document.querySelector('#lname').value;
var nid = document.querySelector('#nid').value;
var ucfid = document.querySelector('#id').value;
var campus = document.querySelector('#campus').value;
var cashNumber = document.querySelector('#cash').value;
var libraryNumber = document.querySelector('#library').value;
var dob = document.querySelector('#birthday').value;

  // Set the starting point for the query based on the search parameters
  var query = database.ref('users');

  // Filter the results based on the search criteria
  var results = [];

  query.once('value', 
    function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();

      if(
      (!firstName || childData.first_name === firstName) && 
      (!lastName || childData.last_name === lastName) &&
      (!ucfid || childData.ucf_id === ucfid) &&
      (!nid || childData.student_nid === nid) &&
      (!campus || childData.campus === campus) &&
      (!cashNumber || childData.knights_cash_account === cashNumber) &&
      (!libraryNumber || childData.library_account === libraryNumber) &&
      (!dob || childData.date_of_birth === dob)) {
      results.push(childData);
      }
    });
    
      // Clear the table of all existing content
      while(table.rows.length > 0) {
        table.deleteRow(0);
      }
      // Loop through the search results and append them to the table
      results.forEach(function(result) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var lastNameCell = document.createElement('td');
        var nidCell = document.createElement('td');
        var ucfidCell = document.createElement('td');
        var campusCell = document.createElement('td');
        var cashNumberCell = document.createElement('td');
        var libraryNumberCell = document.createElement('td');
        var dobCell = document.createElement('td');
        var ucfidLink = document.createElement('a');
        firstNameCell.appendChild(document.createTextNode(result.first_name));
        lastNameCell.appendChild(document.createTextNode(result.last_name));
        nidCell.appendChild(document.createTextNode(result.nid));
        ucfidLink.href = "user.html?ucfid=" + encodeURIComponent(result.nid);
        ucfidLink.appendChild(document.createTextNode(result.ucf_id));
        ucfidCell.appendChild(ucfidLink);
        campusCell.appendChild(document.createTextNode(result.campus));
        cashNumberCell.appendChild(document.createTextNode(result.knights_cash_account));
        libraryNumberCell.appendChild(document.createTextNode(result.library_account));
        dobCell.appendChild(document.createTextNode(result.date_of_birth));
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(nidCell);
        row.appendChild(ucfidCell);
        row.appendChild(campusCell);
        row.appendChild(cashNumberCell);
        row.appendChild(libraryNumberCell);
        row.appendChild(dobCell);
        table.appendChild(row);
      });
      // Add an event listener to the table that listens for a click on a table row
      table.addEventListener('click', function(event) {
      // Check if a table row was clicked
      if (event.target.nodeName === 'td') {
      // Get the UCF ID of the user from the table cell
      var ucfid = event.target.parentNode.querySelector('td:nth-child(4)').textContent;
      // Redirect to the user's data page with the UCF ID as a query parameter
      window.location.href = 'user.html?ucfid=' + ucfid;
  }
});

  });
});

}
window.addEventListener("load", init, false);