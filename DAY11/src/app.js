const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");
const body = document.querySelector("body");
const newArray = [...colors.keys()];

button.addEventListener("click", function () {
  let getIndexA = colors[Math.floor(Math.random() * newArray.length)];
  let getIndexB = colors[Math.floor(Math.random() * newArray.length)];

  if (getIndexA !== getIndexB) {
    body.style.background = `linear-gradient(${getIndexA}, ${getIndexB})`;
  } else {
    getIndexA =
      colors[Math.floor(Math.random() * newArray.length) * 0.5];
    body.style.background = `linear-gradient(${getIndexA}, ${getIndexB})`;
  }
});
