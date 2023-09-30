import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { getAuth , getRedirectResult , signInWithPopup , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { $state } from '../@angular/router';

const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyCjAwl3xsalRBj_GFDBgE-nVw_fkW3DfDk",
    authDomain: "altcodeplatform.firebaseapp.com",
    projectId: "altcodeplatform",
    storageBucket: "altcodeplatform.appspot.com",
    messagingSenderId: "169927494434",
    appId: "1:169927494434:web:001f94e70ff5147900f37b"
};

const login = document.getElementById("submitButton");
const google = document.getElementById("googleAuth");
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

google.addEventListener('click', (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
    })

    getRedirectResult().then(function (result) {
      if (user) {
        // User logged in, go to home page.
        $state.go('./CanvasAlternateDesign.html');
      } else {
        // User not logged in, start login.
        signInWithPopup(provider);
      }
    }).catch(function (error) {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

login.addEventListener('click', (e) =>{
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    
    createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.alert("congratulation!! user created");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    })
})
