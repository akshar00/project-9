var box
 function setup() {

  createCanvas(400,400);
  box=createSprite(200,200,50,50)
  background(30);
}

function draw() 
{
  
  if(keyIsDown(RIGHT_ARROW)){
    background("yellow")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("red")
  }
  if(keyIsDown(UP_ARROW)){
    background("blue")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("green")
  }
drawSprites();
}




