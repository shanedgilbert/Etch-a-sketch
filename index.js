/*
Etch-a-Sketch
Creates an initial grid of 10x10 squares. Each square changes to a random color on mouseover.
When the user presses reset, a prompt appears, asking the user to pick a new size for the grid.
*/

const sketchGrid = document.querySelector(".sketch");
let sketchSize = 800;
sketchGrid.style.width = sketchSize + "px";
let boxSize = 10;
createBox(boxSize);

//Creating the grid
function createBox(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 1; j <= size; j++) {
            let gridSqr = document.createElement("div");
            let gridSqrNum = document.createElement("p");
            //gridSqrNum.appendChild(document.createTextNode((i * 16) + j + " "));
            gridSqr.appendChild(gridSqrNum);
            gridSqr.classList.add('grid-each');
            sketchGrid.appendChild(gridSqr);
            gridSqr.style.backgroundColor = "rgb(255, 255, 255)";
            gridSqr.style.flexBasis = (sketchSize / size) + "px";
            gridSqr.style.height = (sketchSize / size) + "px";
            gridSqr.classList.add((i * 16) + j);
            gridSqr.addEventListener("mouseover", colorChange);
        }
    }
}

//Changes the grid color on mouseover
function colorChange() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Resets the grid to white
// function resetGrid() {
// for (let i = 0; i < 16; i++) {
//     for (let j = 1; j <= 16; j++) {
//         let gridWipe = document.querySelector("." + CSS.escape((i * 16) + j));
//         gridWipe.style.backgroundColor = "rgb(255, 255, 255)";
//     }
// }
// }

//Resizes the box size based on user input
function resetGrid() {
    clearBox(boxSize);
    boxSize = Number(prompt("Designate a new size for each edge Etch-a-sketch. ie: 16 = 16x16"));
    createBox(boxSize);
}

//Clears the grid
function clearBox(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 1; j <= size; j++) {
            let gridRemove = document.querySelector("." + CSS.escape((i * 16) + j));
            gridRemove.parentNode.removeChild(gridRemove);
        }
    }
}