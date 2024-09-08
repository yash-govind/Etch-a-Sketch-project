/*
Create and style square boxes for the grid, add an event listener to each box to generate a random color on click, and append them to the container div.
*/

// Function to generate a random color.
function RandomNum(randomColor) {
  return Math.floor(Math.random() * (randomColor + 1));
}

// Function to change the background color of the square box on click.
const colorChanger = (e) => {
  const randomColor = `rgb(${RandomNum(255)} ${RandomNum(255)} ${RandomNum(
    255
  )})`;
  e.target.style.backgroundColor = randomColor;
};

// Function to initialize our grid.
// If no argument is passed, it will default to a grid size of 8.
const initGrid = (gridSize) => {
  if (!gridSize) gridSize = 8;

  const rowLength = gridSize;
  const colLength = gridSize;

  // Get the container and clean any HTML already in it.
  const container = document.querySelector(".container");
  container.innerHTML = "";

  // Create the grid.

  for (let i = 0; i < rowLength; i++) {
    // Create a row.
    const row = document.createElement("div");
    row.classList = "row";

    for (let j = 0; j < colLength; j++) {
      // create a square box. (each cell)
      const squareBoxes = document.createElement("div");
      squareBoxes.classList = "square-boxes";
      squareBoxes.addEventListener("mouseover", colorChanger);
      row.appendChild(squareBoxes);
    }

    container.appendChild(row);
  }
  document.body.appendChild(container);
};

// Function to open prompt to take user input.
// After user inputs a number, initializes the grid with that number of square boxes per side.
const openUserInputAlert = () => {
  let userResponse = prompt("Please type in your response:");
  initGrid(parseInt(userResponse));
  return;
};

// When user clicks button, open prompt to take user input.
document.querySelector("#btn").addEventListener("click", () => {
  openUserInputAlert();
});

// Initialize the grid with a default size of 8. (first time)
initGrid();
