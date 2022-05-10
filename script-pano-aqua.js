const calcBtn = document.querySelector("button");

let length = document.querySelector("#length");
let width1 = document.querySelector("#width1");
let width2 = document.querySelector("#width2");
let height = document.querySelector("#height");
let answer = document.querySelector("#answer");

calcBtn.addEventListener("click", () => {
	answer.innerHTML =
		(length.value * ((width1.value + width2.value) / 2) * height.value) / 1000 +
		" L";
});
