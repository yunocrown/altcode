import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const firebaseConfig = {
  // Your Firebase configuration
  databaseURL: "https://altcode-7e7ea-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to handle DOM changes and push updated content to Firebase
function handleDomChanges(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'characterData') {
      // Perform necessary logic to get the updated content
      const updatedContent = document.documentElement.innerHTML;

      // Push the updated content to Firebase
      const divContentRef = ref(database, 'divContent');
      set(divContentRef, updatedContent)
        .then(() => {
          console.log("Updated content pushed to Firebase successfully");
        })
        .catch((error) => {
          console.error("Error pushing updated content to Firebase:", error);
        });
    }
  }
}

// Create a new MutationObserver instance
const observer = new MutationObserver(handleDomChanges);

// Start observing the entire DOM for changes
observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });


// Remember to disconnect the observer when it's no longer needed
// observer.disconnect();

//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
// function checkDivContentChanges() {
//     const currentDivContent = document.getElementById("drop-target").innerHTML;  
//     console.log("Checked for div content changes");
//   }
//   setInterval(checkDivContentChanges, 5000);
  
//   function sendDivContentToServer() {
//     const divContent = document.getElementById("drop-target").innerHTML;
//     const divContentRef = ref(database, 'divContent');
    
//     set(divContentRef, divContent)
//       .then(() => {
//         console.log("Div content sent to the server successfully");
//       })
//       .catch((error) => {
//         console.error("Error sending div content to the server:", error);
//       });
//   }
  
//   function retrieveDivContentFromServer() {
//     const divContentRef = ref(database, 'divContent');
    
//     get(divContentRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const divContent = snapshot.val();
//           document.getElementById("drop-target").innerHTML = divContent;
//           console.log("Div content retrieved from the server successfully");
//         } else {
//           console.log("No div content found in the server");
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving div content from the server:", error);
//       });
//   }
  
  // window.addEventListener("beforeunload", sendDivContentToServer);
  // window.addEventListener("load", retrieveDivContentFromServer);
  