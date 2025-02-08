function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 140, 180, 10);
    
    for(var i = 0; i < 500; i++){
        fill('orange');
        stroke('white');
        rect((i*10)%width,(i*10)%height,10,2,10);
    }

    for(var i = 0; i < 300; i++){
        fill('red');
        stroke('white');
        rect((i*30)%width,(i*100)%height,10,8,10);
    }

    fill('brown');
    stroke('black');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}