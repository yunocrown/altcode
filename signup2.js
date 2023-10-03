import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';
import { getAuth , createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyDkx9B9D0t4hPZRapPkdMpn1kARAuNeycs",
  authDomain: "altcode-35511.firebaseapp.com",
  databaseURL: "https://altcode-35511-default-rtdb.firebaseio.com",
  projectId: "altcode-35511",
  storageBucket: "altcode-35511.appspot.com",
  messagingSenderId: "156061115585",
  appId: "1:156061115585:web:1bf3ea47a62613d917a040",
  measurementId: "G-00MRF3C9FN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

document.getElementById("submitButton").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    
    createUserWithEmailAndPassword(auth , email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("congratulation!! user created");
         // var groupContainer = document.getElementById("submitButton");
      // if (groupContainer) {
      //   groupContainer.addEventListener("click", function (e) {
      //     window.location.href = "./CanvasAlternateDesign.html";
      //   });
      // }
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("error");
    });
});
