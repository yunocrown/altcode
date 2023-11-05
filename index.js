var gettingIn = document.getElementById("gettingIn")
var dashboard = document.getElementById("dashboard")
var firstlettercircle = document.getElementById("firstlettercircle")
if (localStorage.getItem("email")) {
  gettingIn.style.display = 'none'
  dashboard.style.display = 'block'
  firstlettercircle.style.display='block'
}
else{
  
  dashboard.style.display = 'none'
  firstlettercircle.style.display='none'
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

  var myElement = document.getElementById('loader-wrapper');
  fadeOut(myElement, 1000);
  function fadeOut(element, duration) {
    var opacity = 2;
    var interval = 50; // Time interval between opacity changes (in milliseconds)
    var steps = duration / interval; // Number of steps to reach the desired duration
  
    var fadeOutTimer = setInterval(function() {
      opacity -= 1 / steps;
      element.style.opacity = opacity;
  
      if (opacity <= 0) {
        clearInterval(fadeOutTimer);
        element.style.display = 'none'; // Hide the element after fading out
      }
    }, interval);
  }
  
