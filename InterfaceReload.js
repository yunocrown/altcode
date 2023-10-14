import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const firebaseConfig = {
    databaseURL: "https://altcode-7e7ea-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

function checkDivContentChanges() {
    const currentDivContent = document.getElementById("drop-target").innerHTML;  
    console.log("Checked for div content changes");
  }
  
  // Call the checkDivContentChanges function every 5 seconds (adjust the interval as needed)
  setInterval(checkDivContentChanges, 5000);
  
  function sendDivContentToServer() {
    const divContent = document.getElementById("drop-target").innerHTML;
    const divContentRef = ref(database, 'divContent');
    
    set(divContentRef, divContent)
      .then(() => {
        console.log("Div content sent to the server successfully");
      })
      .catch((error) => {
        console.error("Error sending div content to the server:", error);
      });
  }
  
  function retrieveDivContentFromServer() {
    const divContentRef = ref(database, 'divContent');
    
    get(divContentRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const divContent = snapshot.val();
          document.getElementById("drop-target").innerHTML = divContent;
          console.log("Div content retrieved from the server successfully");
        } else {
          console.log("No div content found in the server");
        }
      })
      .catch((error) => {
        console.error("Error retrieving div content from the server:", error);
      });
  }
  
  window.addEventListener("beforeunload", sendDivContentToServer);
  window.addEventListener("load", retrieveDivContentFromServer);
  