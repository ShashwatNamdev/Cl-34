const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rope,ball,b1,b2,b3,b4,b5;
var ground;
var engine;
var world

function preload(){	
}

function setup() {
	createCanvas(1500, 800);
	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here.
    ground = new Ground(750,400,1500,40);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x:400,y:50});
    b1 = new Block(900,400,50,50);
    b2 = new Block(900,450,50,50);
    b3 = new Block(900,500,50,50)
    b4 = new Block(900,550,50,50)
    b5 = new Block(900,600,50,50)
	  Engine.run(engine);
    
}

function draw() {
//   rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  // console.log(rubber.x);
  // console.log(rubber.y);

  ball.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope.display();
  drawSprites();
}



