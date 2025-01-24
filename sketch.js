var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#AA44FF') // Auto semicolon insertion
    rect(x,y,10,10);
    x = x + 1;
    x = x % 720; // Modulo operator
    y = y + 2;
    y = y % 480;
}