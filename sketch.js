
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	hammer= new Hammer(200,200,150,50);
    ground= new Ground(600,696,1200,10);
	stone = new Stone(400,500,100,100);
    rubber= new Rubber(800,500,50);
	sand1 = new Sand(500,500,5);
	sand2 = new Sand(550,500,5);
	sand2 = new Sand(560,500,5);
	sand3 = new Sand(570,500,5);
	sand4 = new Sand(580,500,5);
	sand5 = new Sand(590,500,5);
	sand6 = new Sand(600,500,5);
	sand7 = new Sand(610,500,5);
	sand8 = new Sand(520,500,5);
	sand9 = new Sand(530,500,5);
	sand10 = new Sand(540,500,5);
	sand11 = new Sand(630,500,5);
	sand12 = new Sand(640,500,5);
	sand13 = new Sand(650,500,5);
	sand14 = new Sand(660,500,5);
	sand15 = new Sand(680,500,5);
	sand16 = new Sand(690,500,5);
	sand17 = new Sand(700,500,5);
	sand18 = new Sand(400,500,5);
	sand19 = new Sand(420,500,5);

	iron= new Iron(700,500,60,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  
   sand1.display();
   sand2.display();
   sand3.display();
   sand4.display();
   sand5.display();
   sand6.display();
   sand7.display();
   sand8.display();
   sand9.display();
   sand10.display();
   sand11.display();
   sand12.display();
   sand13.display();
   sand14.display();
   sand15.display();
   sand16.display();
   sand17.display();
   sand18.display();
   sand19.display();
  iron.display();
  rubber.display();
  stone.display();
  ground.display();
  hammer.display();
  drawSprites();
 
}



