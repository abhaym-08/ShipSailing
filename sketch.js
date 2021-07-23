var sea
var ship, ship_sailing;
function preload(){
 
sea_image = loadImage("sea.png")
ship_sailing = loadAnimation("ship-1.png", "ship-2.png")
}

function setup(){
  createCanvas(400,400);
   sea = createSprite(300, 180, 600, 30)
  sea.addImage("sea", sea_image)
  sea.x = sea.width/2
  sea.velocityX = -2

  ship = createSprite(50, 300, 30, 30)
  ship.addAnimation("sailing", ship_sailing)
  ship.scale = 0.1
}

function draw() {
  background("blue");
console.log(ship.x)
console.log(ship.y)
  if(sea.x<0){
    sea.x = sea.width/2
  }
 drawSprites();
}