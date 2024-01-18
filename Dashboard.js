import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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

//   window.addEventListener('popstate', function(event) {
//     history.pushState(null, null, window.location.href);
//     this.alert("bhgfg")
//     });
//   history.forward();
//   // window.history.go(0);

// window.addEventListener('keydown', function(event) {
//   if (event.key === 'Backspace') {
//     window.history.go(0);
//     event.preventDefault();
//   }
// });
  
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth();
  // const database = getDatabase(app)
  // const projects = ref(database, 'projects')
  const logout = document.getElementById("log-out")

  const appSettings = {
    databaseURL: "https://altcode-86903-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const projects = ref(database, 'item')


//   logout.addEventListener('click', (e) => {
//   signOut(auth).then(() => {
//     alert("daf")
//       localStorage.removeItem("email")
//       localStorage.removeItem("useremail")
//       localStorage.removeItem("username")
      
//       // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//       // deleteCookie("username");
//       window.location.href ="./index.html";
//   }).catch((error) => {
//     console.log(error)
//     // An error happened.
//   }); 

// })


logout.addEventListener('click', (e) => {
 
    alert("daf")
      localStorage.removeItem("email")
      localStorage.removeItem("useremail")
      localStorage.removeItem("username")
      
      // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // deleteCookie("username");
      // history.replaceState(null, null, window.location.pathname);
      window.location.href ="./index.html";
      
})
// function deleteCookie(name) {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
// }

// function performSearch() {
//     // Get the search input element by its id
//     var searchInput = document.getElementById("searchInput");

//     // Get the user's search query from the input field
//     var searchQuery = searchInput.value;

//     // Perform your search logic here
//     // For this example, we'll simply alert the search query
//     alert("Searching for: " + searchQuery);
//   }
  const username = localStorage.getItem("username");
  const firstLetter = username ? username.charAt(0) : "";
  document.getElementById("firstletter").textContent = firstLetter;
  // console.log(firstLetter);

  function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  document.getElementById("username").textContent = username;
  
    var useremail = localStorage.getItem("useremail");
    if (useremail) {
      document.getElementById("useremail").textContent = useremail;
    }
  
  
    var email = localStorage.getItem("email")
    if (email) {
      document.getElementById("useremail").textContent = email;

    }
  
  var rectangleImage = document.getElementById("rectangleImage");
    if (rectangleImage) {
      rectangleImage.addEventListener("click", function (e) {
        window.location.href = "./interface.html"
      });
    }

    var altcode = document.getElementById("altcode")
    if(altcode){
      altcode.addEventListener("click" ,function(e){
        window.location.href = "./index.html"
      })
    }


    // create-new-project
    const createProject=document.querySelector(".createproject")
    const goforit=document.querySelector(".create")
    const create_new_div=document.querySelector(".create_new_div")
    const type=document.querySelector(".type")
    const project_name=document.querySelector(".project-name")
    const close=document.querySelector("#close")
    
    createProject.addEventListener('click',()=>{
      create_new_div.style.display='block';
    })
    
    close.addEventListener('click',()=>{
      create_new_div.style.display='none';
    })
    
    
    //Firebase realtime
    const project_list=document.querySelector(".project_list")
    
    goforit.addEventListener('click',()=>{
      // console.log(project_name.value)
      // console.log(type.value)
      let inputValue = project_name.value;
      push(projects, inputValue);
      project_name.value=""
      type.value=""
      create_new_div.style.display='none';
      alert("project created successfully👍");  
  })

  function clearprojectList() {
    project_list.innerHTML = "";
}

  onValue(projects, function (snapshot) {
    if (snapshot.exists()) {
        let projectarray = Object.entries(snapshot.val())
        // console.log(projectarray[1])
        clearprojectList();
        for (let i = 0; i < projectarray.length; i++) {
            let currentItem = projectarray[i];
            // let currentItemId = currentItem[0];
            // let currentItemValue = currentItem[1];
            appendProjectArea(currentItem)
            project_list.style.display= "flex";
        }
    } else {

    }
})


function appendProjectArea(item) {
  let projectId = item[0]
  let projectName = item[1]
  let newEl = document.createElement("div")
  let pname = document.createElement("p")
  newEl.className="project"
  pname.textContent = projectName
  newEl.append(pname)
  project_list.append(newEl)

  newEl.addEventListener('dblclick', function () {
      let exactLocationofItemInDb = ref(database, `item/${projectId}`)
      console.log(exactLocationofItemInDb)
      remove(exactLocationofItemInDb)
  })
}

