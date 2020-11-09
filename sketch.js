
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var box1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ground1= new ground(400,600,800,20);
box1 = new box(600,510,150,170);
paper1=new paper(100,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 paper1.display();
 ground1.display();
 box1.display();

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-20});
}

}



