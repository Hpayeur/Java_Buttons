
let button = document.getElementById("clicker")
function clicked(){
  button.innerHTML = "clicked!"
}


const clicker = document.getElementById("button");
const counterDisplay = document.getElementById("counterDisplay");
let counter = 0;
button.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});



