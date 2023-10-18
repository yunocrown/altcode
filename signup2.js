import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';
import { getAuth , createUserWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getDatabase, ref , set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';


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
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();
console.log(app);

const testRef = ref(database, 'test');
set(testRef, { message: 'Hello, Firebase!' })
  .then(() => {
    console.log('Data written successfully');
  })
  .catch((error) => {
    console.log('Error writing data:', error);
  });
document.getElementById("googleAuth").addEventListener('click', (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert(user.displayName + " logged in successfully ");
      window.location.assign("./canvas.html")        

    }).catch((error) => {
      // Handle Errors here.
      //const errorCode = error.code;
      //const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      alert("Error : Window closed by user");
      // ...
    });
  })

 {
document.getElementById("submitButton").addEventListener("click", function() {
    var username = document.getElementById("usernameinput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username.trim() === "") {
      alert("Please enter a username");
      return;
  }

    createUserWithEmailAndPassword(auth ,email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("congratulation!! user created");{
          window.location.assign("./canvas.html")        
        }
        const userRef = ref(database, 'users/' + user.uid);
        set(userRef, {
            username: username
        });
         
    }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error );
        alert("error");
    });
});
}

