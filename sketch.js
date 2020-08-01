
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,box,box1,box2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box= new Box(675,460,5,5);
paper= new Ball(100,30);
ground= new Ground(400,600,800,20);
box1= new Box(675,460,10,120);
box2=new Box(615,520,130,10);
box3=new Box(615,400,130,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
paper.motion();
box1.display();
box3.display();
box2.display();
ground.display();
box.display();
  drawSprites();
 
}



