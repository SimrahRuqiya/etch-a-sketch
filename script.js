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

//chooses color
const colorPicker = document.getElementById('favcolor');

// add hover effect with dynamic color
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Use the selected color from the color picker
        const selectedColor = colorPicker.value;
        item.style.backgroundColor = selectedColor;
    });
});