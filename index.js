const sketchGrid = document.querySelector(".sketch");
let boxSize = 16;
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
    boxSize = Number(prompt("Designate a new size for the Etch-a-sketch"));
    createBox(boxSize);
}

function clearBox(size) {

    for (let i = 0; i < size; i++) {
        for (let j = 1; j <= size; j++) {
            let gridRemove = document.querySelector("." + CSS.escape((i * 16) + j));
            gridRemove.parentNode.removeChild(gridRemove);
        }
    }
}