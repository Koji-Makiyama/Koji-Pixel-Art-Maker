const myTable = document.querySelector('#pixelCanvas');
let form = document.querySelector('form');
var color;
var height;
var width;

function colorCell (event) {
  event.target.style.backgroundColor = document.querySelector('#colorPicker').value;
}

/**
  * This function creates a dynamic JavaScript grid of squares based on the user's input.
  * The grid is composed of the <tr> HTML element for columns and the <td> HTML element for rows.
  * These HTML elements are inserted via the JavaScript code in the function below (makeGrid).
  * height refers to the height selected by the user on the webpage.
  * width refers to the width selected by the user once the webpage.
*/
function makeGrid (height, width) {
  for (let i = 1; i <= height; i++) {
    const newTR = document.createElement('tr');  // Creates height amount of rows
      for (let i = 1; i <= width; i++) {
        const newTD = document.createElement('td'); // Creates width amount of columns
        newTR.appendChild(newTD);
    }
    myTable.appendChild(newTR); // Adds the row to the table before iterating again
  }
}

/** 
  * This method adds interactivity/an event listener when the user clicks on the table in the webpage.
  * colorCell is defined at the top of this file to change the background color of the clicked cell 
  * .. upon click using the color that the user selected in the color picker (or if no color was selected, the default is black).
*/
myTable.addEventListener ('click', colorCell);

/**
  * This method adds an event listener to the <table> element of the HTML.
  * This specific event listener is set up to run the function submitFunction(e){} 
  * .. when 'Submit' has been clicked on the webpage. 
  * The body of the submitFunction(e) has 6 lines, the first line resets the CSS style of <table> to 'white', 
  * the second line removes any previously created rows (<td>) or columns (<tr>) from the previous 'submit' event.
  * the third line runs the method e.PreventDefault(), which is used to prevent the Submit button from clearing the table after its created.
  * the fourth line sets the global variable height to the value inputted on the webpage by the user.
  * the fifth line sets the global variable width to the value inputted on the webpage by the user.
  * the sixth line runs the makeGrid(h, w) function using/passing the recently updated variables h, w.
  * This allows the user to start with a clean canvas with no previous changes made to the table's cells.
*/
form.addEventListener ('submit', function submitFunction(e) {
  myTable.style.backgroundColor = 'white';
  myTable.innerHTML = '';
  e.preventDefault();
  height = document.querySelector('#inputHeight').value;
  width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
});
