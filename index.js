const para = document.createElement("p");
const node = document.createTextNode(localStorage.getItem("email"));
para.appendChild(node);

const showemail = document.getElementById("showemail")
showemail.appendChild(para);

var gettingIn = document.getElementById("gettingIn")
var dashboard = document.getElementById("dashboard")
if (localStorage.getItem("email")) {
  gettingIn.style.display = 'none'
  dashboard.style.display = 'block'
}
else{
  dashboard.style.display = 'none'
  showemail.removeChild(para)
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