const body = document.body;

const personInfo = document.querySelector("#contact-info");
const pictures = personInfo.querySelectorAll(".person-info-pics");

pictures.forEach((element) => {
  element.addEventListener("click", ClickCopy);
  element.addEventListener("mouseover", ReturnHoverTextValue);

});

function ClickCopy(event) {
  let imgClicked = event.target;

  let parentElement = imgClicked.parentElement;
  let tooltip = parentElement.querySelector(".tooltip");

  let link = parentElement.querySelector("a");

  if (link == undefined) {
    navigator.clipboard.writeText(parentElement.querySelector(".copy-value").innerText);
  }
  else {
    navigator.clipboard.writeText(link.href);
  }

  tooltip.innerText = "Kopierad ✔😃"

  console.log(imgClicked.value);
}

function ReturnHoverTextValue(event) {
  let imgClicked = event.target;

  let parentElement = imgClicked.parentElement;
  let tooltip = parentElement.querySelector(".tooltip");

  tooltip.innerText = "Klicka för att kopiera"

}

let mainHeader = document.querySelector("#main-header");
let secondaryHeader = document.querySelector("#secondary-header");

animateHeader();

async function animateHeader() {

  let mainHeaderText = "Välkommen!"

  for (let index = 0; index < mainHeaderText.length; index++) {

    mainHeader.textContent = mainHeaderText.substring(0, index + 1);

    if (mainHeaderText[index] !== " ") {
      await delay(150);
    }
  }

  AnimateSecondaryHeader();

}

async function AnimateSecondaryHeader() {

  let secondaryHeaderPart1 = "Kul att du hittat hit!";
  let secondaryHeaderPart2 = "";

  for (let index = 0; index < secondaryHeaderPart1.length; index++) {

    secondaryHeader.textContent = secondaryHeaderPart1.substring(0, index + 1);

    if (secondaryHeaderPart1[index] != " ") {
      await delay(150);
    }
  }

  let secondaryHeaderPart2Element = document.createElement("span");
  secondaryHeaderPart2Element.style.textDecoration = "underline";
  secondaryHeaderPart2Element.textContent = secondaryHeaderPart2;


  for (let index = 0; index < secondaryHeaderPart2.length; index++) {

    secondaryHeaderPart2Element.textContent = secondaryHeaderPart2.substring(0, index + 1);

    secondaryHeader.appendChild(secondaryHeaderPart2Element);

    await delay(150);

  }

  AnimateCursor();
}

function AnimateCursor() {
  let cursor = document.createElement("span");
  cursor.setAttribute("id", "cursor");
  cursor.textContent = "_";
  secondaryHeader.appendChild(cursor);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}