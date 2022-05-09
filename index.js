let boxElements = document.querySelector(".box-container");
let mouseDown = false;
let offset = [0, 0];
let currentNumber = 1;
let maxNumber = 1;

const LEFT_MOUSE_INDEX = 1;
const RIGHT_MOUSE_INDEX = 3;

function mouseDownHandler(event) {
    if (event.target.classList.contains('box')) {
        mouseDown = true;
        offset = [
            event.target.offsetLeft - event.clientX,
            event.target.offsetTop - event.clientY
        ];
    }
}

function mouseUpHandler(event) {
    mouseDown = false;
    console.log("Mouse up");
}

function leftMouseMoveHandler(event) {
    if (event.target.classList.contains('box') && event.which === LEFT_MOUSE_INDEX && mouseDown) {
        console.log("Moving left mouse");
        let x = event.clientX + offset[0] + 'px';
        let y = event.clientY + offset[1] + 'px';
        event.target.style.left = x;
        event.target.style.top = y;
    }
}

function generateRandomColor() {
    const COLOR_SIZE = 6; 
    const HEX_SIZE = 16;
    let hexDigits = '0123456789ABCDEF';
    let color ='#';
    for (let i = 0; i < COLOR_SIZE; ++i) {
        color += hexDigits[Math.floor(Math.random() * HEX_SIZE)];
    }
    return color;
}

function rigthMouseClickHandler(event) {
    if (event.target.classList.contains('box') && event.which === RIGHT_MOUSE_INDEX) {
        event.target.style.background = generateRandomColor();
    }
}

function sizeChangeHandler(event) {
    if (event.target.classList.contains('box') && event.shiftKey) {
        if (event.target.classList.contains("box-large")) {
            event.target.classList.remove("box-large");
        } else {
            event.target.classList.add("box-large");
        }
    }
}

function createNewBoxHandler(event) {
    if (event.target.classList.contains('box') && !event.altKey) {
        ++currentNumber;
        const newBox = document.createElement("div");
        newBox.className = "box";
        newBox.innerHTML = ++maxNumber;

        let coordinates = event.target.getBoundingClientRect();
        newBox.style.left = coordinates.right + 'px';
        newBox.style.top = coordinates.bottom + 'px';

        boxElements.appendChild(newBox);
    }
}

function deleteBoxHandler(event) {
    const MIN_BOX_AMOUNT = 1;
    if (event.target.classList.contains('box') && event.altKey && currentNumber > MIN_BOX_AMOUNT) {
        --currentNumber;
        boxElements.removeChild(event.target);
    }
}


window.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // remove contest menu showing up on right click
});

document.addEventListener("mouseup", mouseUpHandler);

boxElements.addEventListener("mousedown", mouseDownHandler);
boxElements.addEventListener("mousemove", leftMouseMoveHandler);
boxElements.addEventListener("mousedown", rigthMouseClickHandler);
boxElements.addEventListener("click", sizeChangeHandler);
boxElements.addEventListener("dblclick", createNewBoxHandler);
boxElements.addEventListener("dblclick", deleteBoxHandler);
