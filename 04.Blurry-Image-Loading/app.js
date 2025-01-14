const root = document.documentElement;
let blurValue;
const image = document.getElementById("image");
let text = document.getElementById("text");
function updateBlurValue() {
  blurValue = +getComputedStyle(root)
    .getPropertyValue("--blur-value")
    .trim()
    .replace("px", "");
  blurValue--;
  root.style.setProperty("--blur-value", `${blurValue}px`);
  text.textContent = `${blurValue}%`;
  if (blurValue === 0) {
    clearInterval(updation);
  }
}

let updation = setInterval(updateBlurValue, 40);
