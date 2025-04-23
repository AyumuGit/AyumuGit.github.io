/* From What I Have Learnt From Creating This Project.

You dont delete a drawn thing on the canvas,
you instead redraw the canvas on a new frame without the objectS you dont want.
    
* Store object data in array *
To remove something on the canvas is to remove it from the array
and redraw everything else in the array again on the new frame
^ This results in storing mouseX and mouseY position data in an array.
    
Can a line() function be stored as an object in array?
Not directly in an easy manner. It is simpler to store the data that
composes the line and redraw the lines in a seperate function
using that array data.

Would vector work better instead?
No, fundamentally, I was only able to make one line, attemps to create 
two individual lines results in the old line, jumping weirldy to catch up
to where the mouse has suddenly moved to upon the second click.

I referenced Jeff Thompson's code in this video:
 https://www.youtube.com/watch?v=nHf7gvCN2Dg, where instead of using
a P5 line() function, I instead made use of vector points in an array 
to simulate the function, but with the added ability to
track and store the drawn data. *----------* This ultimately did not work.

Making a trail style line referencing from https://happycoding.io/tutorials/p5js/array-functions
also made use of vectors, which didn't work for its own reason, where pushing
mouse position data to the array couldn't keep up with mouse movement, and as
such, was not viable. Also was not connected seamlessly in the same way as line().

*/

var lineArray = []; // Store mouse coords
var index;
var strokeWeightSlider;
var colourPicker;
var eraserMode = 0; //Erase tool activator
var eraserSize = 20;
var bgColour = "grey";


//Learnt by referencing https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
//------------//
function drawLine(x1, y1, x2, y2){
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    line(x1, y1, x2, y2);
    lineArray.push({ 
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    });
}
//--------------//
// I find the function above to be my favourite piece of code out of 
// the entire project, and particualry interesting due to its use of key
// value pairs. This feature solved the storage problem that I was having when 
// it came to tracking my mouse coordinates, because with these key value pairs, 
// I was abe to tie all the coordinates needed for the line() function, and easily
// reference them by the key name. This simplified the process of pushing
// data to an array, and making use of it in a future section of the code.


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bgColour);
    
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    strokeWeightSlider.position(10, 40);
    //Default line tool weight and colour.
    colourPicker = createColorPicker("black");
    colourPicker.position(180, 40);
    
}

function draw() {
    
    if (mouseIsPressed){
        if (eraserMode == 0){
            // When dragging the mouse button, store mouse coords in lineArray
            drawLine(mouseX, mouseY, pmouseX, pmouseY);
            console.log(lineArray);
        } else if (eraserMode == 1){
            drawErase();
            console.log(drawErase());
        }
    }

    // References https://editor.p5js.org/aferriss/sketches/SJ2UFxy5M
    if (keyIsPressed && key == 'e'){
        eraserMode = 1;
    } else {
        eraserMode = 0;
    }

}

function drawErase() {
    strokeWeight(eraserSize);
    stroke("grey");
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function refreshUndo(){
    // Go through each array index.
    // For each index, draw a line with the provided coords.
    for(let i = 0; i < lineArray.length; i++){
        index = lineArray[i];
        line(index.x1, index.y1, index.x2, index.y2);
        
        //console.log(index.x1, index.y1, index.x2, index.y2);
    }
}

//Data is not removed, it is redrawn without.
function undo(){
    lineArray.pop(); //Delete most recent line drawing
    background('grey'); //Clear canvas,
    refreshUndo();//Redraw lines with coords from lineArray.
}

function keyPressed() {
    if (key === 'z') {
        undo();
    }
    
    if (key === 'q'){
        eraserSize += 30;
    } else if (key === 'w'){
        eraserSize -= 30;
    }

    // if (key === 'r') {
    //     refresh();
    // }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("grey");
}

// function refresh() {
//     location.reload();
// }
