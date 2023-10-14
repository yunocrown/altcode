

const userinterfaceButton = document.querySelector(".userInterface");
const layout = document.querySelector(".layout");
const mediaButton = document.querySelector(".media");
const drawingButton = document.querySelector(".drawingAnimation");
const mapsButton = document.querySelector(".maps");
const sensorsButton = document.querySelector(".sensors");
const socialButton = document.querySelector(".social");
const utilitiesButton = document.querySelector(".utilities");
const dynamicButton = document.querySelector(".dynamic");
const connectivityButton = document.querySelector(".connectivity");
const googleButton = document.querySelector(".google");
const monetization = document.querySelector(".monetization");
const extensionButton = document.querySelector(".extensions");
const assets = document.querySelector(".assets");
const closeIcon = document.querySelector(".close");
const uploadingContent = document.querySelector(".uploadingContent");
assets.addEventListener("click" , () => {
  uploadingContent.style.display = "grid";
});
closeIcon.addEventListener("click", () => {
  uploadingContent.style.display = "none";
});

var sideIcons = document.getElementById("stationaryIcons");
var dragScreen = document.getElementById("draggableScreen");
var buttonTxt = document.querySelectorAll(".buttonTxt");
sideIcons.addEventListener("mouseover", function() {
  sideIcons.style.width = "14.81rem";
  dragScreen.style.width = "3.69rem";
  dragScreen.style.left = "14.6rem";
  for (let i = 0; i < buttonTxt.length; i++) {
    buttonTxt[i].style.display = 'none';
  }
});
sideIcons.addEventListener("mouseout", function() {
  sideIcons.style.width = "3.69rem";
  dragScreen.style.width = "14.81rem";
  dragScreen.style.left = "3.52rem";
  for (let i = 0; i < buttonTxt.length; i++) {
    buttonTxt[i].style.display = 'flex';
  }
});

assets.addEventListener("click", () => {
  uploadingContent.style.display = "grid";
});
closeIcon.addEventListener("click", () => {
  uploadingContent.style.display = "none";
})

var sideIcons = document.getElementById("stationaryIcons");
var dragScreen = document.getElementById("draggableScreen");
var buttonTxt = document.querySelectorAll(".buttonTxt");
sideIcons.addEventListener("mouseover", function () {
  sideIcons.style.width = "14.81rem";
  dragScreen.style.width = "3.69rem";
  dragScreen.style.left = "14.6rem";
  for (let i = 0; i < buttonTxt.length; i++) {
    buttonTxt[i].style.display = 'none';
  }
});
sideIcons.addEventListener("mouseout", function () {
  sideIcons.style.width = "3.69rem";
  dragScreen.style.width = "14.81rem";
  dragScreen.style.left = "3.52rem";
  for (let i = 0; i < buttonTxt.length; i++) {
    buttonTxt[i].style.display = 'flex';
  }
});

var screenTxt = document.querySelector(".screenTxt");
var dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    screenTxt.textContent = event.target.textContent;
  }
});

var alignScreenTxt = document.getElementById("center");
var alignContent = document.querySelector(".align-content");
alignContent.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    var clickedButton = event.target.textContent;
    var currentButtonText = alignScreenTxt.textContent;
    alignScreenTxt.textContent = clickedButton;
  }
});

var componentTxt = document.querySelector(".componentTxt");
var componentContent = document.querySelector(".component-content");
componentContent.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    componentTxt.textContent = event.target.textContent;
  }
});

var allscreenTxt = document.querySelector(".allscreenTxt");
var screenContent = document.querySelector(".screen-content");
screenContent.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    allscreenTxt.textContent = event.target.textContent;
  }
});

var layoutTxt = document.getElementById("layoutTxt");
var layoutIcon = document.getElementById("layoutIcon");
var layoutContent = document.querySelector(".layoutContent");
layoutContent.addEventListener("click", function(event) {
  var clickedItem = event.target.closest("a");
  if (clickedItem) {
    event.preventDefault();
    layoutTxt.textContent = clickedItem.querySelector(".layoutContentTxt").textContent;
    layoutIcon.src = clickedItem.querySelector(".layoutContentIcon").src;
    layout.removeAttribute("open");
  }
});

var expandIcon = document.getElementById("expandIcon");
var removeIcon = document.getElementById("removeIcon");
var monetizationTxt = document.getElementById("monetizationTxt");
var monetizationIcon = document.getElementById("monetizationIcon");
var monetizationContent = document.querySelector(".monetizationContent");
monetization.addEventListener("click", function() {
  expandIcon.style.display = "none";
  removeIcon.style.display = "flex";
})
monetizationContent.addEventListener("click", function(event) {
  var clickedItem = event.target.closest("a");
  if (clickedItem) {
    event.preventDefault();
    monetizationTxt.textContent = clickedItem.querySelector(".monetizationContentTxt").textContent;
    monetizationIcon.src = clickedItem.querySelector(".monetizationContentIcon").src;
    monetization.removeAttribute("open");
  }
});

const AssetsUploadBtn = document.querySelector(".AssetsUploadBtn");
const inputValue = document.querySelector('.AssetsUpload');
const preview = document.querySelector(".preview");
const box = document.querySelector(".box");
const previewTxt = document.querySelector(".previewTxt");
const uploadfiles = document.querySelector('.uploadedfiles');
inputValue.addEventListener('change', () => {
  const fileInput = document.querySelector('.AssetsUpload');
  const files = fileInput.files;

  const existingBoxes = document.querySelectorAll('.box');
  const topIncrement = 60;
  const newTopValue = existingBoxes.length * topIncrement;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(file);
    imageElement.alt = 'Image';
    imageElement.classList.add('uploadedimg');
    const textElement = document.createElement('p');
    textElement.classList.add('uploadedtext');
    textElement.textContent = file.name; 
    boxElement.appendChild(imageElement);
    boxElement.appendChild(textElement);
    boxElement.style.top = `${newTopValue}px`;

    const totalCapacity = 5 * 1024 * 1024; // 5MB
    const usedStorage = calculateUsedStorage();
    const remainingStorage = totalCapacity - usedStorage;
    const imageSize = file.size;
    const usedStorageElement = document.querySelector(".informationBlockTxt");
    usedStorageElement.textContent = `You are currently on the free plan. Upgrade to Premium to compile apps with more than 5MB in assets. You are currently using ${(usedStorage / (1024 * 1024)).toFixed(2)}MB in this project.`;
    console.log(remainingStorage);
    if (imageSize > remainingStorage) {
      alert("Image size exceeds the available storage. Please upload a smaller image.");
    } else {
      uploadfiles.appendChild(boxElement);
      const reader = new FileReader();
      reader.onload = function(event) {
        localStorage.setItem(file.name, event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
});

const clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", (e) =>{
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach(function(box) {
    box.parentNode.removeChild(box);
    const fileName = box.querySelector('.uploadedtext').textContent;
    localStorage.removeItem(fileName);
  });  
  const usedStorageElement = document.querySelector(".informationBlockTxt");
  usedStorageElement.textContent = "You are currently on the free plan. Upgrade to Premium to compile apps with more than 5MB in assets. You are currently using 0MB in this project.";
  preview.removeAttribute('src');
});

function calculateUsedStorage() {
  let usedStorage = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);
    usedStorage += key.length + item.length * 2;
  }
  return usedStorage;
}

uploadfiles.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const boxElement = clickedElement.closest('.box');
  if (boxElement) {
    const clickedImgSrc = boxElement.querySelector('img');
    if (clickedImgSrc) {
      preview.src = clickedImgSrc.src;
      previewTxt.style.display = "none";
    }
  }
});
const listItems = document.querySelectorAll("#draggableScreen a");
const target = document.querySelector("#drop-target");
for (const listItem of listItems) {
  listItem.addEventListener("dragstart", dragStart);
}

const centerButton = document.querySelector("#center");
var Target = document.getElementById("drop-target");
centerButton.addEventListener("click", function () {
  console.log("centered")
  Target.style.justifyItems = "center";
});

const leftButton = document.querySelector("#left");
leftButton.addEventListener("click", function () {
  Target.style.justifyItems = "flex-start";
});

const rightButton = document.querySelector("#right");
rightButton.addEventListener("click", function () {
  Target.style.justifyItems = "flex-end";
});

target.addEventListener("dragover", dragOver);
target.addEventListener("drop", drop);

function dragStart(event) {
  const copyElement = event.target.cloneNode(true);
  event.dataTransfer.setData("text/plain", copyElement.id);
  copyElement.classList.add("cloned-element");
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const draggableElementId = event.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(draggableElementId);
  if (draggableElement) {
    const copyElement = draggableElement.cloneNode(true);
    target.appendChild(copyElement);
    const ulElement = copyElement.closest("a");
    ulElement.style.backgroundColor = "red";
    ulElement.style.padding = "10px";
  } else {
    console.error("Element with ID " + draggableElementId + " not found.");
  }
}

var aboutScreenTxt = document.querySelector(".aboutScreenTxt");
var label = document.querySelector(".label");
aboutScreenTxt.addEventListener("click", function () {
  label.style.top = "-10px";
  label.style.fontSize = "var(--font-size-2sx)";
  label.style.backgroundColor = "var(--color-gray-900)";
});

var screenlabelTxt = document.querySelector(".screenlabelTxt");
var screenlabel = document.querySelector(".screenlabel");
screenlabelTxt.addEventListener("click", function () {
  screenlabel.style.fontSize = "var(--font-size-2sx)";
  screenlabel.style.backgroundColor = "var(--color-gray-900)";
  screenlabel.style.top = "-10px";
})

const colorPicker = document.querySelector(".color");
const hexcolortext = document.querySelector(".hexcolor");
colorPicker.addEventListener("change", function () {
  const hexColor = this.value;
  target.style.backgroundColor = hexColor;
  hexcolortext.textContent = hexColor;
});
hexcolortext.addEventListener("click", function () {
  colorPicker.click();
});

var draggableListpicker = document.getElementById("draggableListpicker");
draggableListpicker.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  draggableListpicker.style.backgroundColor = "var(--color-gray-900)";
  draggableListpicker.style.border = "1px solid var(--color-dimgray-200)";
  draggableListpicker.style.width = "13.5rem";
});
draggableListpicker.addEventListener("dragend", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  draggableListpicker.style.border = "none";
  draggableListpicker.style.backgroundColor = "none";
});

var draggableButton = document.getElementById("draggableButton");
draggableButton.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  draggableButton.style.backgroundColor = "var(--color-gray-900)";
  draggableButton.style.border = "1px solid var(--color-dimgray-200)";
  draggableButton.style.width = "13.5rem";
});
draggableButton.addEventListener("dragend", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  draggableButton.style.border = "none";
  draggableButton.style.backgroundColor = "none";
});