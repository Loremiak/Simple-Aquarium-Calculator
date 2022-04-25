const calcBtn = document.querySelector("button");

let length = document.querySelector("#length");
let width = document.querySelector("#width");
let height = document.querySelector("#height");
let answer = document.querySelector("#answer");

calcBtn.addEventListener("click", () => {
	answer.innerHTML = (length.value * width.value * height.value) / 1000 + " L";
});
