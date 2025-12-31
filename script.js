
function greetUser() {
    let name = document.getElementById("username").value;
    let greeting = document.getElementById("greeting");

    if (name !== "") {
        greeting.textContent = "Hello, " + name;
    }
}

function changeColor(box) {
    let colorName = box.textContent;

    if (box.style.backgroundColor === colorName) {

        box.style.backgroundColor = "lightgray";
    } else {
        box.style.backgroundColor = colorName;
    }
}
