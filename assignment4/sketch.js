//Arrays and variables to store object data of rain.
var position = 0;
var colours = [];
var shapes = [];
var positions = [];
var rotations = [];
var speeds = [];
var partiCount = 200;
var rainActive = false;
var angle;
var shape;

//Variables for toggling snowflake firework
var snowFall = [];
var snowflake;
var originX;
var originY;
var mouseButton;

//https://p5js.org/examples/classes-and-objects-snowflakes/
function createSnowFlake(x, y){
    originX = x;
    originY = y;
    // originX = random(width);
    // originY = random(height);
    for(var i = 0; i < 30; i++){
        snowflake = {
            x: originX,
            y: originY,
            xSpeed: random(-2, 2),
            ySpeed: random(-2, 2),
            alpha: 255,
            colour: color(random(255), random(255), random(255), this.alpha),
            draw: function (){
                //noStroke();
                fill(this.colour);
                ellipse(this.x, this.y, 5, 5);
                this.update();
            },
            update: function (){
                this.x += this.xSpeed;
                this.y += this.ySpeed;
                this.ySpeed += 0.05;
                this.alpha -= 2;
                this.colour.setAlpha(this.alpha);
            },
        };
        snowFall.push(snowflake);
    }
    //console.log(snowFall);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //createSnowFlake(random(width), random(height));
    //noStroke();
    
    //Particle randomizer, iterates one by one, through the designated particle
    //count, and changes the colour, shpae, position when drawn on the canvas, 
    //rotational angle, and speed as it moves across the canvas.
    for (var i = 0; i < partiCount; i++){
        colours[i] = color(random(255), random(255), random(255));
        shapes[i] = shapeRandomizer();
        positions[i] = random(height);
        rotations[i] = random(TWO_PI);
        speeds[i] = random(6) + 1;
    }
}

function draw() {
    background(0,76,76);
    
    //Testing number of snowflake fireworks drawn on canvas.
    /* 
    strokeWeight(1);
    stroke("black");
    text(snowFall.length, 20, 20);
    */
    
    //Press mouse button, active debris rain.
    if(rainActive){
        partiRain();
    }


    for(snowflake of snowFall){
        snowflake.draw();
    }
    
    //Removes snowflakes with no alpha opacity through array filters.
    snowFall = snowFall.filter(function(snowflake){
        if (snowflake.alpha > 0){
            return true;
        }else{
            return false;
        }
    });

    //Removes offscreen snowflakes through array filter on y-axis.
    snowFall = snowFall.filter(function(snowflake){
        if (snowflake.y < height){
            return true;
        }else{
            return false;
        }
    });

    //Removes offscreen snowflakes through array filter on x-axis.
    snowFall = snowFall.filter(function(snowflake){
        if((snowflake.x < width) && (snowflake.x > 0)){
            return true;
        }else{
            return false;
        }
    });
}

function partiRain() {
    for (var i = 0; i < colours.length; i++){
        fill(colours[i]);
        push();
        translate((i*10) % width, positions[i]);
        rotate(rotations[i]);
        if (shapes[i] === 'rainDrop'){
            ellipse(0, 0, 20, 10);
        }
        if (shapes[i] === 'flower'){
            flowerParti();
        }
        if (shapes[i] === 'face'){
            text("╯°□°）╯︵ ┻━┻", 0, 0);
        }
        pop();
        
        positions[i] += speeds[i];
        positions[i] = positions[i] % height;
        // console.log(partiRain);
        // console.log(partiCount);
        //console.log(positions[i]);
    }
}

//Set starting rain particles.
function cloud(){
    fill('violet');
    ellipse(20, position++, 15, 5);
    ellipse(150, position++, 15, 5);
    ellipse(50, position++, 15, 5);
    ellipse(200, position++, 15, 5);
    ellipse(width/4, position++, 15, 5);
    ellipse(width/2, position++, 15, 5);
    text("╯°□°）╯︵ ┻━┻", 300, position);
    position = position % windowHeight;
}

//https://p5js.org/reference/p5/angleMode/
function flowerParti() { 
    angle = TWO_PI / 7;
    translate(250, position);
    
    noStroke();
    
    for (var i = 0; i < 7; i += 1) {
        fill(255, random(50));
        ellipse(0, 0, 50, 5);
        rotate(angle);
    }
}

//Randomize ratios and types of debris rain particles. 
function shapeRandomizer() {
    shape = "rainDrop";
    if(random() > 0.6){
        shape = 'flower';
    }
    if(random() > 0.6){
        shape = 'face';
    }
    return shape;
}

//Press middle mouse button, activate snowflake firework.
//Press left mouse button, activate debris rain.
function mousePressed(){
    if (mouseButton === CENTER){
        createSnowFlake(mouseX, mouseY);
    } else if (mouseButton === LEFT){
        rainActive = !rainActive;
        console.log(rainActive);
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}