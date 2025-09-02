const button = document.getElementById("button")
const tableContainer = document.getElementById("tableContainer")

button.addEventListener("click", () => {
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        button.textContent = "Hide table";
    } else {
        tableContainer.style.display = "none";
        button.textContent = "Show table";
    }
});


const button1 = document.getElementById('button1');
const tooltrip12 = document.getElementById('list');

button1.addEventListener("mouseenter", () => {
    tooltrip12.style.display = "block";
    button1.textContent = "Close";
    button1.style.color = "blue";
});

button1.addEventListener("mouseleave", () => {
    tooltrip12.style.display = "none";
    button1.textContent = "Open";
    button1.style.color = "black"
});






// const button1 = document.getElementById('button1');
// const tooltrip12 = document.getElementById('list');

// button1.addEventListener("mouseenter", () => {
//     tooltrip12.style.display = "block";
//     button1.textContent = "Hover!";
//     button1.style.color = "blue";
// });

// button1.addEventListener("mouseleave", () => {
//     tooltrip12.style.display = "none";
//     button1.textContent = "Hover!";
//     button1.style.color = "black"
// });