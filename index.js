// const para = document.createElement("p");
// const node = document.createTextNode(getCookie("username"));
// para.appendChild(node);
// const showusername = document.getElementById("showusername");
// showusername.appendChild(para);

var gettingIn = document.getElementById("gettingIn")
var dashboard = document.getElementById("dashboard")
var firstlettercircle = document.getElementById("firstlettercircle")
if (localStorage.getItem("email")) {
  gettingIn.style.display = 'none'
  dashboard.style.display = 'block'
  firstlettercircle.style.display='block'
  // if (para.textContent == "null") {
  //   para.style.display = "none"
  // }
}
else{
  dashboard.style.display = 'none'
  firstlettercircle.style.display='none'

  // if (para.textContent == "null") {
  //   para.style.display = "none"
  // }
}

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

// showusername.addEventListener("click", () => {
//   window.location.assign("./dashboard.html");
// })


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

const username = localStorage.getItem("username");
  const firstLetter = username ? username.charAt(0) : "";
  document.getElementById("firstletter").textContent = firstLetter;
  console.log(firstLetter);

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