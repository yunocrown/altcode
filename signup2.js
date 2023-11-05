import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';
import { getAuth , createUserWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getDatabase, ref , set , update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const firebaseConfig = {    
    apiKey: "AIzaSyDkx9B9D0t4hPZRapPkdMpn1kARAuNeycs",
    authDomain: "altcode-86903.firebaseapp.com",
    databaseURL: "https://altcode-86903-default-rtdb.firebaseio.com",
    projectId: "altcode-86903",
    storageBucket: "altcode-86903.appspot.com",
    messagingSenderId: "374955386378",
    appId: "1:374955386378:web:a8f112f985eaa57f46e1f3",
    measurementId: "G-RGTLGT3E40"
  };

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();

document.getElementById("googleAuth").addEventListener('click', (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(user.displayName + " logged in successfully");
      window.location.assign("./canvas.html");
    }).catch((error) => {
      alert("Error: Window closed by user");
    });
});


var submitbutton = document.getElementById("submitButton");
submitbutton.addEventListener("click", function() {
  var username = document.getElementById("usernameinput").value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  if (username.trim() === "") {
    alert("Please enter a username");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Congratulations!! User created");
      localStorage.setItem("email", email)
      localStorage.setItem("username", username)
      window.location.assign("./canvas.html");

      // const usersRef = ref(database, 'users');
      // const newUserRef = update(usersRef);
      // set(newUserRef, {
      //   username: username
      // }).then(() => {
      //   console.log('Data written successfully');
      // }).catch((error) => {
      //   console.log('Error writing data:', error);
      // });
    }).catch((error) => {
      alert("Error: " + error.message);
    });
});

