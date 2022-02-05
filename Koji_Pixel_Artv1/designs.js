const myTable = document.querySelector('#pixelCanvas');
let form = document.querySelector('form');
var color;
var h;
var w;

function colorCell (event) {
  event.target.style.backgroundColor = document.querySelector('#colorPicker').value;
}

function makeGrid (h, w) {
  for (let i = 1; i <= h; i++) {
    const newTR = document.createElement('tr');  // Creates height amount of rows
      for (let i = 1; i <= w; i++) {
        const newTD = document.createElement('td'); // Creates width amount of columns
        newTR.appendChild(newTD);
    }
    myTable.appendChild(newTR); // Adds the row to the table before iterating again
  }
}

myTable.addEventListener ('click', colorCell);
form.addEventListener ('submit', function submitFunction(e) {
  myTable.style.backgroundColor = 'white';
  myTable.innerHTML = '';
  e.preventDefault();
  h = document.querySelector('#inputHeight').value;
  w = document.querySelector('#inputWidth').value;
  makeGrid(h, w);
});
