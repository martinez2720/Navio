var rio;
var navio;
function preload(){
  rioImage = loadImage("sea.png");
  navioImage= loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  

  
}

function setup(){
  createCanvas(400,400);
  rio = createSprite(200,180,400,20);
  rio.addImage("rio",rioImage);
  rio.velocityX=-3;
  navio = createSprite(100,300,40,20);
  navio.addImage("navio",navioImage);
  navio.scale= 0.2;
}

function draw() {
  background("blue");
    drawSprites();
if(rio.x<0){
  rio.x = rio.width /2;
}
}
