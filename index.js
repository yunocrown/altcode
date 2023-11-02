// history.pushState(null, null, window.location.href);
//   history.replaceState(null, null, window.location.href);
// alert("hy")
// history.replaceState(null, null, "./index.html");
// window.onpopstate = function () {
//   history.go(1);
//   alert("go")
// };

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Backspace') {
//     event.preventDefault();
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  
  window.onload = function() {
    // Code to be executed after the page has finished loading
    alert("loaded");

console.log("Page loaded!");

history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function(event) {
  history.pushState(null, null, window.location.href);
});

// Disable the backspace key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    window.history.go(0);
    event.preventDefault();
  }
});
};
});

// const node = document.createTextNode(getCookie("username"));

const showusername = document.getElementById("showusername");

var gettingIn = document.getElementById("gettingIn")
var dashboard = document.getElementById("dashboard")
var isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn===true) {
  alert("hi")
  const para = document.createElement("p");
  const node = document.createTextNode(getCookie("username"));
  para.appendChild(node);
  showusername.appendChild(para);
  if (localStorage.getItem("email")) {
  gettingIn.style.display = 'none'
  dashboard.style.display = 'block'
}
else{
  alert("none")
  dashboard.style.display = 'none'
  showusername.removeChild(para)
}
}

function getCookie(name="admin") {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
}

showusername.addEventListener("click", () => {
  window.location.assign("./dashboard.html");
})


var signUp = document.getElementById("signUp");
if (signUp) {
  signUp.addEventListener("click", function (e) {
    window.location.href = "./SignUp.html";
  });
}

var signIn = document.getElementById("signIn");
if (signIn) {
  signIn.addEventListener("click", function (e) {
    window.location.href = "./SignIn.html";
  });
}

var groupContainer10 = document.getElementById("groupContainer10");
if (groupContainer10) {
  groupContainer10.addEventListener("click", function (e) {
    window.location.href = "./SignIn.html";
  });
}

var dashboard = document.getElementById("dashboard");
// dashboard.style.display = 'none'
if (dashboard) {
  dashboard.addEventListener("click", function (e) {
    window.location.href = "./dashboard.html";
  });
}


