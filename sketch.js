
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
leftwall= new Dustbin(1260,625,130,PI/0)
rightwall= new Dustbin(1030,625,130,PI/0)
bottomwall= new Dustbin(1145,680,250,90)

ground = new Ground(500,height,2072,20)

ball=Bodies.circle(100,50,20)
World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
ground.display();
leftwall.display();
rightwall.display();
bottomwall.display();



ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}

  function KeyPressed (){
	if(KeyCode===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})

	}

}



