var allthekitties = [];
var currentkitty = 0;
var kittyposition = {x: 200, y: 200, w: 200, h: 200};

function preload() {

    //kittycats = loadJSON('https://api.thecatapi.com/v1/images/search?limit=10', successCallback);
    let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=5';
    loadJSON(url, successCallback);
}

function successCallback(data) {
    console.log(data);
    for(kitty of data) {
        var kitty = createImg(kitty.url);
        kitty.hide();
        allthekitties.push(kitty);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // console.log(kittycats);
}

function draw() {
    background('pink');
    
    text(allthekitties.length, 10,10);

    // image(kittycat, width/2, height/2);
    // image(kittyimg, 0,0, 100,100);
    // image(kittyimg2, 100,100, 100, 100);

    image(allthekitties[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);
}

function mousePressed() {
    // if we click the kitty, increment currentkitty and change position
    if (mouseX > kittyposition.x && mouseX < kittyposition.x + kittyposition.h
        && mouseY > kittyposition.y && mouseY < kittyposition.y + kittyposition.h) {
        currentkitty++;
        currentkitty = currentkitty % allthekitties.length;
        kittyposition.x = random(width - kittyposition.w);
        kittyposition.y = random(height - kittyposition.h);
    }
}