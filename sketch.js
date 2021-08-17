const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backGround,bg;
var girl, snow, g;
var snowflake = [];

var engine,world;

function preload(){

  bg = loadImage("snow2.jpg")

  g = loadAnimation("character/girl1 (2).png","character/girl2 (2).png","character/girl3 (2).png","character/girl4 (2).png","character/girl5 (2).png","character/girl6 (2).png","character/girl7 (2).png","character/girl8 (2).png")

  sf = loadImage("snow4.webp")

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  

  girl = createSprite(0,350,100,100);
  girl.addAnimation("girl_walking",g)
  girl.scale = 0.2;

  
  for(var i = 50; i<=width; i=i+50){
    snowflake.push(new Snow(i,0,70))
  }

}

function draw() {
  background(bg);  
  drawSprites();

  girl.velocityX = 3;

  if(frameCount%300 === 0 ){
    girl.x = 0
  }

  Engine.update(engine)

  for (var i = 0; i < snowflake.length; i++) {
    snowflake[i].display();
    snowflake[i].setposition();
  }
 
}