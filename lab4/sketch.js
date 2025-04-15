var kitten;
var kindle;
var meow;
var numberOfKitties = 9; // many kitties

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    kitten = createImg('kitten.jpeg'); // load image
    kindle = createVideo('kittens.mp4'); // load video
    kindle.hide();
    kindle.volume(0); // volume
    kindle.play();
    // kindle.pause();
    meow = createAudio('meow.wav'); // load sound
    meow.speed(10); // playback rate
}

function draw() {
    background('blue');
    imageMode(CORNER);
    //image(kitten, mouseX, mouseY);
    for (var x = 0; x < numberOfKitties; x++) {
        for (var y = 0; y < numberOfKitties; y++){
            push();
            translate(x * width / numberOfKitties, y * height / numberOfKitties);
            image(kindle, 0, 0, 100, 100);
            pop();
        }
    }
    imageMode(CENTER);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount/30);
    image(kitten, 0, 0);
    pop();
}

function mousePressed() {
    kindle.play();
    meow.speed(10);
    meow.play();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}