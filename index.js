const sketchGrid = document.querySelector(".sketch");

for (let i = 0; i < 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let gridSqr = document.createElement("div");
        let gridSqrNum = document.createElement("p");
        //gridSqrNum.appendChild(document.createTextNode((i * 16) + j + " "));
        gridSqr.appendChild(gridSqrNum);
        gridSqr.classList.add('grid-each');
        sketchGrid.appendChild(gridSqr);
        gridSqr.addEventListener("mouseover", colorChange);
    }
}

function colorChange() {
    let rand1 = Math.floor(Math.random() * 256);
    let rand2 = Math.floor(Math.random() * 256);
    let rand3 = Math.floor(Math.random() * 256);
    this.style.backgroundColor = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
}