// Function to write text before game starts
const txt = "Etch-A-Sketch";
const speed = 100;
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("heading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
// JavaScript to create the grid
const gridContainer = document.getElementById('grid-container');

// Create 16x16 = 256 grid items
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}