import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { getAuth , signInWithPopup , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
    })

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
