
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(400,80,width-50,50);
	ground2 = new ground(400,710,width,50);

	bob1 = new bob(400,550,90);
	bob2 = new bob(300,550,90);
	bob3 = new bob(200,550,90);
	bob4 = new bob(500,550,90);
	bob5 = new bob(600,550,90);
	chain1 = new chain(bob1.body,ground1.body,0,0)
	chain2 = new chain(bob2.body,ground1.body,-80,0)
	chain3 = new chain(bob3.body,ground1.body,-160,0)
	chain4 = new chain(bob4.body,ground1.body,80	,0)
	chain5 = new chain(bob5.body,ground1.body,160,0)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  chain5.display();
  chain4.display();
  chain3.display();
  chain2.display();
  chain1.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground1.display();
  ground2.display()

  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x: -500, y: 0})
	}
}


