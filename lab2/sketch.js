var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: "red",
    draw: function () {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.h || this.y < 0) {
            this.ySpeed *= -1;
        }

        //redBrick.x = (redBrick.x + 1) % width;
        //redBrick.y = (redBrick.y + 1) % height;
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 4,
    colour: "blue",
    draw: function () {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.h || this.y < 0) {
            this.ySpeed *= -1;
        }

        //redBrick.x = (redBrick.x + 1) % width;
        //redBrick.y = (redBrick.y + 1) % height;
    }
};


var purpleBrick = {
    x: 160,
    y: 180,
    w: 60,
    h: 60,
    c: 0,
    xSpeed: 9,
    ySpeed: 10,
    cSize: 1,
    colour: "purple",
    draw: function () {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h, this.c);
        
        if(((this.x < 0 || this.x > width - this.w) || (this.y > height - this.h || this.y < 0))){
            this.c += this.cSize;
            console.log(this.c);
        }
        
        if(this.c >= 40){
            this.c = 0;
            console.log(this.c);
        }
    },
    move: function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.h || this.y < 0) {
            this.ySpeed *= -1;
        }

    }
}


// redBrick.x++ would retrun the current value then increments
// ++redBrick.x increments value and then returns

function setup() {
    createCanvas(720, 480);
}

function draw() {
    background('grey');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    purpleBrick.draw();
    purpleBrick.move();
}