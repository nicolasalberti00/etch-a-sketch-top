const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

function setSize(newSize) {
  currentSize = newSize;
}

//Selected the container
const sizeSlider = document.getElementById('sliderS');
const sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid');

//Find values for the grid
sizeSlider.onmousemove = (e) => updateValue(e.target.value);
sizeSlider.onchange = (e) => changeGrid(e.target.value);
//Hover coloring effect
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmousedown = () => (mouseDown = false);


function changeGrid(value) {
  setSize(value);
  updateValue(value);
  reloadGrid();
}

function updateValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}
function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = '';
}

//Creation of the grid
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.addEventListener('mouseover', changeColor);
    gridCell.addEventListener('mousedown', changeColor);
    grid.appendChild(gridCell);
  }
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  else {
    e.target.style.backgroundColor = 'black';
  }
}


createGrid(DEFAULT_SIZE);
