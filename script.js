//Selected the container
const container = document.querySelector('.container');

//Creation of the divs
createGrid = () => {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < 16; i++) {//cols
    divCol = document.createElement('div');
    divCol.classList.add('grid-col');
    for (let j = 0; j < 16; j++) {
      divRow = document.createElement('div');
      divRow.classList.add('grid-cell');
      tag = document.createElement('p');
      text = document.createTextNode('Hello World');
      tag.appendChild(text);
      divRow.appendChild(tag);
      divCol.appendChild(divRow);
    }
    grid.appendChild(divCol);
  }
  container.appendChild(grid);
}

createGrid();
