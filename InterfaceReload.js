function getDOMState() {
    var inputElements = document.querySelectorAll('input');
    var domState = {};
  
    inputElements.forEach(function(input) {
      domState[input.id] = input.value;
    });
  
    return domState;
  }  

window.addEventListener('beforeunload', function() {
    // Save the DOM state to localStorage
    localStorage.setItem('domState', JSON.stringify(getDOMState()));
    console.log("uploaded")
  });
  function setDOMState(savedState) {
    for (var key in savedState) {
      if (savedState.hasOwnProperty(key)) {
        var element = document.getElementById(key);
        if (element) {
          element.value = savedState[key];
        }
      }
    }
  }
  
window.addEventListener('DOMContentLoaded', function() {
  // Fetch the DOM state from localStorage
  var savedDOMState = localStorage.getItem('domState');
  
  if (savedDOMState) {
    // Restore the DOM state
    setDOMState(JSON.parse(savedDOMState));
  }
});
    
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
// import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://altcode-7e7ea-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

// const databaseRef = database().ref('domChanges');

// // Listen for DOM changes
// document.addEventListener('click', (event) => {
//   // Get relevant information about the DOM change
//   const target = event.target;
//   const tagName = target.tagName;
//   const textContent = target.textContent;

//   // Update the database with the DOM change
//   databaseRef.push({
//     tagName: tagName,
//     textContent: textContent,
//     timestamp: firebase.database.ServerValue.TIMESTAMP
//   });
// });


// import jsdom from "jsdom"; 
// $(document).ready(function() {
//   location.reload(true);
// });
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
// import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';


// const firebaseConfig = {
//   // Your Firebase configuration
//   databaseURL: "https://altcode-7e7ea-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const changes = [];

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     // Access the target element and its properties
//     const targetElement = mutation.target;
//     const targetProperties = {
//       id: targetElement.id,
//       tagName: targetElement.tagName,
//       className: targetElement.className,
//     };
//     changes.push(targetProperties);
//   });

//   sendChangesToServer(changes);
// });

// observer.observe(document, { subtree: true, childList: true });

// document.addEventListener("input", checkDocContentChanges);
// document.addEventListener("change", checkDocContentChanges);
// document.addEventListener("click", checkDocContentChanges);

// function checkDocContentChanges(event) {
//   const targetElement = event.target;
//   const targetProperties = {
//     id: targetElement.id,
//     tagName: targetElement.tagName,
//     className: targetElement.className,
//   };
//   changes.push(targetProperties);
//   sendChangesToServer(changes);
// }

// function sendChangesToServer(changes) {
//      const changesJSON = JSON.stringify(changes);
//      console.log(changesJSON)
//      const databaseRef = ref(database);
//      set(databaseRef, changesJSON)
//        .then(() => {
//          console.log("Changes array successfully pushed to the database");
//        })
//        .catch((error) => {
//          console.error("Error pushing changes array to the database:", error);
//        });
// }

// window.addEventListener("beforeunload", retrieveChangesFromServer);

// function retrieveChangesFromServer() {
//   const databaseRef = ref(database);
//   get(databaseRef)
//     .then((snapshot) => {
//       const existingChangesJSON = snapshot.val();
//       const existingChanges = JSON.parse(existingChangesJSON);
//       applyChangesToDOM(existingChanges);
//     })
//     .catch((error) => {
//       console.error("Error retrieving changes from the database:", error);
//     });
// }

// function applyChangesToDOM(changes) {
//   changes.forEach((mutation) => {
//     const targetElement = document.querySelector(mutation.selector);
//     if (targetElement) {
//       if (mutation.type === 'insert') {
//         const newElement = document.createElement(mutation.tagName);
//         newElement.innerHTML = mutation.content;
//         targetElement.appendChild(newElement);
//       } else if (mutation.type === 'remove') {
//         targetElement.parentNode.removeChild(targetElement);
//       } else if (mutation.type === 'update') {
//         targetElement.innerHTML = mutation.content;
//       }
//     }
//   });
// }

// function checkDivContentChanges() {
//   const currentDivContent = document.getElementById("drop-target").innerHTML;
//   const currentBackgroundColor = document.getElementById("drop-target").style.backgroundColor;
//   console.log("Checked for div content changes");
//   // Perform necessary logic to handle the changes
// }

// setInterval(checkDivContentChanges, 5000);

// function sendDivContentToServer() {
//   const divContent = document.getElementById("drop-target").innerHTML;
//   const backgroundColor = document.getElementById("drop-target").style.backgroundColor;
//   const divContentRef = ref(database, 'divContent');
//   const backgroundColorRef = ref(database, 'backgroundColor');

//   set(divContentRef, divContent)
//     .then(() => {
//       console.log("Div content sent to the server successfully");
//     })
//     .catch((error) => {
//       console.error("Error sending div content to the server:", error);
//     });

//   set(backgroundColorRef, backgroundColor)
//     .then(() => {
//       console.log("Background color sent to the server successfully");
//     })
//     .catch((error) => {
//       console.error("Error sending background color to the server:", error);
//     });
// }

// function retrieveDivContentFromServer() {
//   const divContentRef = ref(database, 'divContent');
//   const backgroundColorRef = ref(database, 'backgroundColor');

//   get(divContentRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const divContent = snapshot.val();
//         document.getElementById("drop-target").innerHTML = divContent;
//         console.log("Div content retrieved from the server successfully");
//       } else {
//         console.log("No div content found in the server");
//       }
//     })
//     .catch((error) => {
//       console.error("Error retrieving div content from the server:", error);
//     });

//   get(backgroundColorRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const backgroundColor = snapshot.val();
//         document.getElementById("drop-target").style.backgroundColor = backgroundColor;
//         console.log("Background color retrieved from the server successfully");
//       } else {
//         console.log("No background color found in the server");
//       }
//     })
//     .catch((error) => {
//       console.error("Error retrieving background color from the server:", error);
//     });
// }

// window.addEventListener("beforeunload", sendDivContentToServer);
// window.addEventListener("load", retrieveDivContentFromServer);
