import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth ,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDkx9B9D0t4hPZRapPkdMpn1kARAuNeycs",
  authDomain: "altcode-35511.firebaseapp.com",
  databaseURL: "  https://altcode-86903-default-rtdb.firebaseio.com ",
  projectId: "altcode-35511",
  storageBucket: "altcode-35511.appspot.com",
  messagingSenderId: "156061115585",
  appId: "1:156061115585:web:1bf3ea47a62613d917a040",
  measurementId: "G-00MRF3C9FN"
};
 
const app = initializeApp(firebaseConfig);
const auth = getAuth();

let submit = document.getElementById("submit")
let email = document.getElementById("email")

submit.addEventListener('click', (e)=> {
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
        email ="";
        alert("email sent")
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error")
      // ..
    });
    })