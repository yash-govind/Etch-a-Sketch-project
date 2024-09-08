/*
Create and style square boxes for the grid, add an event listener to each box to generate a random color on click, and append them to the container div.
*/

for (let i = 0; i < 255; i++) {
  const container = document.querySelector(".container");
  const squareBoxes = document.createElement("div");
  squareBoxes.classList = "square-boxes";
  squareBoxes.addEventListener("mouseover", (e) => {
    const randomColor = `rgb(${RandomNum(255)} ${RandomNum(255)} ${RandomNum(
      255
    )})`;
    e.target.style.backgroundColor = randomColor;
  });
  container.appendChild(squareBoxes);
  document.body.appendChild(container);
}

function RandomNum(randomColor) {
  return Math.floor(Math.random() * (randomColor + 1));
}
