// Text Scrambler
// One button -> createButton
// Press Button -> mousePresed
// Prompt Window -> prompt();
// Enter text -> text();
// text gets displayed 
// Second Button under text - > createButton
// Press "scramble" Button
// Takes text from prompt window -> array = []
// Rearranges text -> shuffle();
// Outputs Text - > text();

//Press button, full screens the window
//Press ESC, resets winow to original size

var textButton;
var scrambleButton;
let response;
let responseArray = [];
let textCount = 0;
var refreshButton;
var scrambledResponse;
let fsButton;
let fs;


function mousePressed(){
    console.log(textCount);
    if(textCount >= 1) {
        textButton.hide();
        refreshButton.show();
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("grey");

    textButton = createButton('Enter Text');
    textButton.position(0,0);
    textButton.center('horizontal');
    textButton.style('margin-top: 5px');

    scrambleButton = createButton("Scramble");
    scrambleButton.center();

    refreshButton = createButton("Refresh Page");
    refreshButton.position(0,0);
    refreshButton.style('margin-top: 5px', 'margin-left: 5px');
    refreshButton.hide();

    fsButton = createButton("Enter Fullscreen");
    fsButton.position(windowWidth - 100, 0);
    fsButton.style('margin-top: 5px', 'margin-right: 5px');

    textButton.mousePressed(function(){
        textCount++;
        //Referenced from https://www.w3schools.com/jsref/met_win_prompt.asp
        response = prompt("Write anything you want");
        if (response != null){
            console.log(textCount);
            textAlign(CENTER);
            textSize(40);
            text(response, width/2, height/4);
            responseArray = Array.from(response);
            console.log(responseArray);
        } 
    });
    
    // Inspired by nr1479's Text Scramble, https://editor.p5js.org/nr1479/sketches/bJx8JCDU_
    scrambleButton.mousePressed(function(){
        shuffle(responseArray, true);
        console.log(responseArray);
        scrambledResponse = join(responseArray, "");
        console.log(scrambledResponse);
        background('grey');
        textAlign(CENTER);
        textSize(40);
        text(scrambledResponse, width/2, height/4);
    });
    
    refreshButton.mousePressed(function(){
        window.location.reload();
    });

    //Referenced from https://p5js.org/reference/p5/fullscreen/
    fsButton.mousePressed(function(){
        fullscreen(true);
    });
}

// Draw function is defunct for this assignment, as it is all conditional functions.

// function draw(){
    
// }

// Global Callback
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("grey");
}