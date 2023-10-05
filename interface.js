
        const assets = document.querySelector(".assets");
        const closeIcon = document.querySelector(".close");
        const uploadingContent = document.querySelector(".uploadingContent");
        assets.addEventListener("click" , () => {
            
          uploadingContent.style.display = "grid";
        });
        closeIcon.addEventListener("click", () => {
          uploadingContent.style.display = "none";
        })



        var sideIcons = document.getElementById("stationaryIcons");
        var dragScreen = document.getElementById("draggableScreen");
        // var userinterfaceTxt = document.getElementById("userinterfaceTxt");
        var buttonTxt = document.querySelectorAll(".buttonTxt");
        // var userInterface = document.getElementById("userInterface");
        // var layout = document.getElementById("layoutIcon");

        // var expandIcon = document.getElementById("expandIcon");
        // var layoutContent = document.getElementById("layoutContent");
        // layout.addEventListener("click", function () {
        //     layoutContent.style.display = "initial";
        // });

        sideIcons.addEventListener("mouseover", function() {
          sideIcons.style.width = "14.81rem";
          dragScreen.style.width = "3.69rem";
          dragScreen.style.left = "14.6rem";
          // userinterfaceTxt.style.display = "flex";
          // userInterface.style.width = "14.00rem";
          // layout.style.width = "14.00rem";
          for (let i = 0; i < buttonTxt.length; i++) {
            buttonTxt[i].style.display = 'none';
          }
        });
        sideIcons.addEventListener("mouseout", function() {
          sideIcons.style.width = "3.69rem";
          dragScreen.style.width = "14.81rem";
          dragScreen.style.left = "3.52rem";
          // userinterfaceTxt.style.display = "none";
          // userInterface.style.width = "4.5rem";
          // layout.style.width = "4.5rem";
          for (let i = 0; i < buttonTxt.length; i++) {
            buttonTxt[i].style.display = 'flex';
          }
        });

        var screenTxt = document.querySelector(".screenTxt");
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.addEventListener("click", function(event) {
            if (event.target.tagName === "A") {
                screenTxt.textContent = event.target.textContent;
            }
        });

        var alignScreenTxt = document.getElementById("center");
        var alignContent = document.querySelector(".align-content");
        alignContent.addEventListener("click" , function(event) {
          if (event.target.tagName === "BUTTON") {
            var clickedButton = event.target.textContent;
            var currentButtonText = alignScreenTxt.textContent; 
            alignScreenTxt.textContent = clickedButton;
          }
        });

        var componentTxt = document.querySelector(".componentTxt");
        var componentContent = document.querySelector(".component-content");
        componentContent.addEventListener("click", function(event) {
            if (event.target.tagName === "A") {
                componentTxt.textContent = event.target.textContent;
            }
        });

        var allscreenTxt = document.querySelector(".allscreenTxt");
        var screenContent = document.querySelector(".screen-content");
        screenContent.addEventListener("click", function(event) {
            if (event.target.tagName === "A") {
                allscreenTxt.textContent = event.target.textContent;
            }
        });

        // var layoutTxt = document.getElementById("layoutTxt");
        // var layoutContent = document.querySelector(".layoutContent");
        // var layoutSwappableIcon = document.getElementById("layoutSwappableIcon");
        // layoutContent.addEventListener("click", function() {
        //   if (event.target.tagName === "A") {
        //     layoutTxt.textContent = event.target.textContent;
        //     var layoutContentIcon = event.target.querySelector(".layoutContentIcon");
        //     if(layoutSwappableIcon) {
        //       layoutSwappableIcon.src = layoutContentIcon.src;
        //     }
        //   }
        // });
        
        //uploading and storing content for application
        const AssetsUploadBtn = document.querySelector(".AssetsUploadBtn");
        const inputValue = document.querySelector('.AssetsUpload');
        const preview = document.querySelector(".preview");
        const imagesUploaded = document.querySelector('.imagesUploaded');
        const box = document.querySelector(".box");
        box.style.display = "none";
        const previewTxt = document.querySelector(".previewTxt");
        
        inputValue.addEventListener('change', () => {
          const fileInput = document.querySelector('.AssetsUpload');
          const files = fileInput.files;
          for (let i = 0; i < files.length; i++) {
            const file = files[i];   
            const listItem = document.createElement('li', 'list-element');
            const box = document.createElement('div');
            box.classList.add('box', 'new-box');
            const imageElement = document.createElement('img');
            imageElement.src = URL.createObjectURL(file);
            imageElement.alt = 'Image';
            const textElement = document.createElement('p');
            textElement.classList.add('text');
            textElement.textContent = file.name;
            box.appendChild(imageElement);
            box.appendChild(textElement);
            listItem.appendChild(box);
            imagesUploaded.appendChild(listItem);
          }
        });


        const listItems = document.querySelectorAll("#draggableScreen a");
        const target = document.querySelector("#drop-target");
        for (const listItem of listItems) {
          listItem.addEventListener("dragstart", dragStart);
        }

        const centerButton = document.querySelector("#center");
        var Target = document.getElementById("drop-target");
        centerButton.addEventListener("click", function() {
          console.log("centered")
            Target.style.justifyItems = "center";
        });

        const leftButton = document.querySelector("#left");
        leftButton.addEventListener("click", function() {
          Target.style.justifyItems = "flex-start";
          console.log("lefted")
        });

        const rightButton = document.querySelector("#right");
        rightButton.addEventListener("click", function() {
          Target.style.justifyItems = "flex-end";
        });

        target.addEventListener("dragover", dragOver);
        target.addEventListener("drop", drop);

        function dragStart(event) {
          const copyElement = event.target.cloneNode(true);
          event.dataTransfer.setData("text/plain", copyElement.id);
          copyElement.classList.add("cloned-element");
          console.log(copyElement.id)
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

            console.log('Element dropped');
          } else {
            console.error("Element with ID " + draggableElementId + " not found.");
          }
        }
        
        var aboutScreenTxt = document.querySelector(".aboutScreenTxt");
        var label = document.querySelector(".label");
        aboutScreenTxt.addEventListener("click", function() {
          label.style.top = "-10px";
          label.style.fontSize = "var(--font-size-2sx)";
          label.style.backgroundColor = "var(--color-gray-900)";
        });

        var screenlabelTxt = document.querySelector(".screenlabelTxt");
        var screenlabel = document.querySelector(".screenlabel");
        screenlabelTxt.addEventListener("click" , function() {
          screenlabel.style.fontSize = "var(--font-size-2sx)";
          screenlabel.style.backgroundColor = "var(--color-gray-900)";
          screenlabel.style.top = "-10px";
        })

        const colorPicker = document.querySelector(".color");
        const hexcolortext = document.querySelector(".hexcolor");
        colorPicker.addEventListener("change", function() {
          const hexColor = this.value;
          target.style.backgroundColor = hexColor;
          hexcolortext.textContent = hexColor;
        });
        hexcolortext.addEventListener("click", function() {
          colorPicker.click();
        });

        var draggableListpicker= document.getElementById("draggableListpicker");
        draggableListpicker.addEventListener("dragstart", function(event) {
          event.dataTransfer.setData("text/plain", event.target.id);
          draggableListpicker.style.backgroundColor = "var(--color-gray-900)";
          draggableListpicker.style.border = "1px solid var(--color-dimgray-200)";
          draggableListpicker.style.width = "13.5rem";
        });    
        draggableListpicker.addEventListener("dragend", function(event) {
          event.dataTransfer.setData("text/plain", event.target.id);
          draggableListpicker.style.border = "none";
          draggableListpicker.style.backgroundColor = "none";
        });

        var draggableButton= document.getElementById("draggableButton");
        draggableButton.addEventListener("dragstart", function(event) {
          event.dataTransfer.setData("text/plain", event.target.id);
          draggableButton.style.backgroundColor = "var(--color-gray-900)";
          draggableButton.style.border = "1px solid var(--color-dimgray-200)";
          draggableButton.style.width = "13.5rem";
        });    
        draggableButton.addEventListener("dragend", function(event) {
          event.dataTransfer.setData("text/plain", event.target.id);
          draggableButton.style.border = "none";
          draggableButton.style.backgroundColor = "none";
        });