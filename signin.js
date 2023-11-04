import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase , ref , update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';
import { getAuth, signInWithEmailAndPassword ,sendPasswordResetEmail,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


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
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const auth = getAuth();

// Google auth starts here


document.getElementById("google").addEventListener('click', (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert(user.displayName + " logged in successfully ");
    }).catch((error) => {
      // Handle Errors here.
       const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorCode , "Error : Window closed by user");
      // ...
    });
  })


  // Email and password 

document.getElementById("signinbutton").addEventListener('click', (e)=> {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    
    signInWithEmailAndPassword(auth , email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const dt = new Date();
        update(ref(database, 'user/' + user.uid),{
          last_login:dt,          
          })
          localStorage.setItem("email", email)
          localStorage.setItem("username", username)
          alert(user.email + " successfully logged in");
          window.location.assign("./canvas.html")
   
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Email or Password is incorrect");
    });
});

