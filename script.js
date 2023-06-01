const refreshBtn = document.querySelector(".refresh-btn");
const colorList = document.querySelector(".color-list");

const maxPaletteBoxes = 10;

const copyColor = (color, hexCode) => {
  const colorElement = color.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexCode)
    .then(() => {
      colorElement.innerHTML = "Copied!";
      setTimeout(() => {
        colorElement.innerHTML = hexCode;
      }, 1000);
    })
    .catch((err) => alert("Failed to copy!"));
};

const generatePalette = () => {
  colorList.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);

    const color = document.createElement("li");
    color.classList.add("color");

    color.innerHTML = `
        <div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>
    `;
    color.addEventListener("click", () => copyColor(color, randomHex));
    colorList.appendChild(color);
  }
};

refreshBtn.addEventListener("click", generatePalette);
window.addEventListener("load", generatePalette);
