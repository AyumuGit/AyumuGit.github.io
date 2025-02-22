var colourPicker; // function scope
let strokeWeightSlider; // Block scope
var bgColourPicker;
var mouseIsPressed;
var keyPressed;
var eraseTool;
let eraserSize = 20;

function paint() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    // remixed from p5js.org/reference/mouseispressed/
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    if (key === 'q') {
        eraserSize += 30;
    } else if (key === 'w') {
        eraserSize -= 30;
    }
}

function drawErase() {
    strokeWeight(eraserSize);
    stroke(bgColourPicker.value());
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function setup() {
    createCanvas(720, 480);
    
    colourPicker = createColorPicker("red");
    
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    
    bgColourPicker = createColorPicker("grey");
    
    var bgColorButton = createButton("Refresh");
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed(repaint);
    
    eraseTool = createCheckbox("Erase");

    background(bgColourPicker.value());

    let qDiv = createDiv('Press "Q" to increase Eraser Size.');
    let wDiv = createDiv('Press "W" to decrease Eraser Size.');
    
}

function draw() {
    // ellipse(mouseX, mouseY, 10,10);
    // line( 30, 20, 85, 75);
    
    if (eraseTool.checked()) {
        drawErase();
    } else {
        paint();
    }
    
}

function repaint() {
    background(bgColourPicker.value());
    console.log(bgColourPicker.value());
}

