var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(65,90);
  weight = random(400,1500);

  car = createSprite(100, 200, 80, 40);

  wall = createSprite(1550, 200, 60, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(keyDown("space")) {
    car.velocityX = speed;
  }

  var deform = (0.5*weight*speed*speed)/22500;

  if ((wall.x - car.x < wall.width/2 + car.width/2)) {
    car.velocityX = 0;
    
    textSize(30);
    text("Deformation:" + deform,700,80);
  }

  if(deform < 100 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = "green";
  } else if(deform > 100 && deform <180 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = "yellow";
  } else if(deform > 180 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = "red";
  }

  drawSprites();
}