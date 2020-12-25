var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet=createSprite(50,200,50,10);
  thickness=Math.round(random(20,83));
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2)
  {
    bullet.velocityX=0;
    var dam=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(dam>10)
    {
      wall.shapeColor="red";
    }
    if(dam<=10)
    {
      wall.shapeColor="green";
    }
  }
  bullet.depth=wall.depth+1;
  drawSprites();
}