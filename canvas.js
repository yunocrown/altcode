import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyDkx9B9D0t4hPZRapPkdMpn1kARAuNeycs",
  authDomain: "altcode-35511.firebaseapp.com",
  databaseURL: " https://altcode-86903-default-rtdb.firebaseio.com",
  projectId: "altcode-35511",
  storageBucket: "altcode-35511.appspot.com",
  messagingSenderId: "156061115585",
  appId: "1:156061115585:web:1bf3ea47a62613d917a040",
  measurementId: "G-00MRF3C9FN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Retrieve the username from the database
const userRef = ref(database, 'users/' + user.uid + '/username');
onValue(userRef, (snapshot) => {
  const username = snapshot.val();
  if (username) {
    // Display the username on the canvas page
    document.getElementById("usernameDisplay").textContent = "Hello, " + username + "!";
  }
});

alert("Hello, " + username + "! Welcome to the canvas page!");
