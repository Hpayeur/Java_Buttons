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


/* <button id="clicker" onclick="clicked()">click me</button>
<p>Clicks: <a id="clicks">0</a></p> */

/* <button id="clickButton">Click Me</button>
// <p>Clicks: <span id="counterDisplay">0</span></p> */
