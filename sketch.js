var block1,block2;


function setup() {
  createCanvas(800,400);
  block1 = createSprite(400,200,50,50)
  block1.shapeColor ="green";
  block2 = createSprite(200, 100, 100, 50);
  block2.shapeColor ="green";
}

function draw() {
  background(255,255,255); 
  
  block1.x = World.mouseX;
  block1.y = World.mouseY;

  if(block1.x - block2.x < block1.width/2+block2.width/2
    && block2.x -block1.x < block1.width/2+block2.width/2){
   // && block1.y -block2.y < block1.heigth/2+block2.height/2
    //&& block2.y -block1.y < block1.heigth/2+block2.height/2){
     block1.shapeColor = "red";
     block2.shapeColor = "red";
  }
  else{
    block1.shapeColor = "green";
    block2.shapeColor = "green";

  }

  console.log(block1.x-block2.x);
  
  drawSprites();
}