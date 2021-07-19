const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImage;
var snowImg;
var fall = []
var snowfall;

function preload(){
bgImage = loadImage("snow3.jpg");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(bgImage);  
  Engine.update(engine);

  if(frameCount%5 === 0){
    fall.push(snowfall= new Snowfall());
  }

  for(var i = 0; i < fall.length; i++){
    fall[i].display();
  }

  drawSprites();
}

