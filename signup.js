import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCjAwl3xsalRBj_GFDBgE-nVw_fkW3DfDk",
    authDomain: "altcodeplatform.firebaseapp.com",
    projectId: "altcodeplatform",
    storageBucket: "altcodeplatform.appspot.com",
    messagingSenderId: "169927494434",
    appId: "1:169927494434:web:001f94e70ff5147900f37b"
};

const login = document.getElementById("submitButton");
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

login.addEventListener('click', (e) =>{
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.alert("congratulation!! user created");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    })
})