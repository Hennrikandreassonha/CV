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
  else{
    navigator.clipboard.writeText(link.href);
  }

  tooltip.innerText = "Kopierad ✔😃"

  console.log(imgClicked.value);
}

function ReturnHoverTextValue(event){
  let imgClicked = event.target;

  let parentElement = imgClicked.parentElement;
  let tooltip = parentElement.querySelector(".tooltip");

  tooltip.innerText = "Klicka för att kopiera"

}