var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,500,800,20);
	paper=new Paper(100,450,20,20);
	bottom=new Box(450,485,100,10);
	left=new Box(400,440,10,100);
	right=new Box(500,440,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display()
paper.display()
bottom.display()
left.display()
right.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-13})

	}
}



