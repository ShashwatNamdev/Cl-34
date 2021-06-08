const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

function preload(){	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here.
    hammer = new Hammer(400,200,100,40,PI/7);
    ground = new Ground(400,700,800,40);
    stone = new Stone(400,500,80,80,PI/7);
    rubber = new Rubber(200,300,50);
	  Engine.run(engine);
    
}

function draw() {
//   rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  // console.log(rubber.x);
  // console.log(rubber.y);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  
  drawSprites();
}



