//Expanding upon the P5 Orbit Control Example.
//Referencing https://p5js.org/examples/3d-orbit-control/
//Adding togglable versions of the first tutorial, through referencing
//the code in https://p5js.org/reference/p5/keyPressed/

var utahShape;

//https://p5js.org/reference/p5/loadModel/
function preload() {
    utahShape = loadModel('Teapot.stl', true); 
    //Teapot Model Sourced From https://www.printables.com/model/263601-3d-printable-solid-utah-teapot
}

function firstElement(){ //References code from the P5 Orbit Control Page.
    background(250, 180, 200); //Relocated from main draw function to a seperate function. 
    
    strokeWeight(5);
    noFill();
    stroke(32, 8, 64);

    for(let zAngleFirst = 0; zAngleFirst < 180; zAngleFirst += 30){
        for (let xAngleFirst = 0; xAngleFirst < 360; xAngleFirst += 30){
            push();

            rotateZ(zAngleFirst);
            rotateX(xAngleFirst);

            translate(0, 400, 0);
            box();
            pop();
        }
    }
}

function secondElement(){ 
    //Modified original code to make use of a custom shape from an alternative tutorial.
    background(220, 196, 117);
    
    //Design of hollow spheres referenced from https://editor.p5js.org/aniruddhaadak/sketches/qlElOPfms
    stroke(180, 220, 255, 150);
    strokeWeight(1.5);
    noFill();

    for(let zAngleSecond = 0; zAngleSecond < 180; zAngleSecond += 30){
        for ( let xAngleSecond = 0; xAngleSecond < 360; xAngleSecond += 30){
            push();

            rotateZ(zAngleSecond);
            rotateX(xAngleSecond);

            translate(0, 400, 0);
            sphere();
            pop();
        }
    }
}

function thirdElement(){
    //Modifed original code once more to make use of the P5 loadModel Tutorial.
    
    background(10, 1, 26);
    stroke(221, 194, 185); 
    
    for(let zAngleThird = 0; zAngleThird < 180; zAngleThird += 60){
        for( let xAngleThird = 0; xAngleThird < 360; xAngleThird += 60){
            //Reduced number of teapots due to high poly count of model.    
            push();
            
            rotateZ(zAngleThird);
            rotateX(xAngleThird);
            
            translate(0, 400, 0);
            //https://www.printables.com/model/263601-3d-printable-solid-utah-teapot/comments
            model(utahShape);
            pop();
        }
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    
    //Starts page with the first element.
    //orbitControl();
    firstElement();
}

function draw(){
    //Project founded on the use of orbitControl() - https://p5js.org/reference/p5/orbitControl/
    orbitControl();

    //Swaps the type of element being viewed in the canvas.
    firstElement();
    keyPressed();
    
}

//Personal Adaptation based on keyPressed function reference- https://p5js.org/reference/p5/keyPressed/
function keyPressed(){
    if (key === "1"){
        firstElement();
    }
    if (key === "2"){
        secondElement();
    } 
    if (key === "3"){
        thirdElement();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}