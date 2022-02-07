let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let cssValues = document.querySelector("h3");
let body = document.getElementById("gradient");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssValues.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
