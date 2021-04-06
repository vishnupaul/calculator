var buttons = document.querySelectorAll(".btn");
var display = document.querySelector("#display");
var toggle = document.querySelector("#toggle");
var displayContainer = document.querySelector(".display-container");
var btnEqual = document.querySelector("#button-equals");
var btnClear = document.querySelector("#button-clear");
var btn = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "sign") {
      display.textContent = -1 * " ";
    }
    display.textContent += value;
  });
}
btnEqual.addEventListener("click", function () {
  var result = eval(display.textContent);
  display.textContent = result;
});
btnClear.addEventListener("click", function () {
  display.textContent = " ";
});
document.querySelector("#button-sign").addEventListener("click", function () {
  display.textContent = -1 * display.textContent;
});

toggle.addEventListener("click", function () {
  for (var i = 0; i < btn.length; i++) {
    btn[i].classList.toggle("night");
  }
  displayContainer.classList.toggle("display-night");
});
