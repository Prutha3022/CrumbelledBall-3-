const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper1,ground, gameState;
var slingShot;

function setup() {
	createCanvas(1600, 800);
    rectMode(CENTER);

	gameState = "start";
	
	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper(1200, 600, 50, 50);
	dustbin1 = new Dustbin(1300, 650, 50, 200);
	dustbin2 = new Dustbin(1500, 700, 200, 50);
	dustbin3 = new Dustbin(1700, 650, 50, 200);

	slingShot = new SlingShot(paper1.body, {x:500, y:400});

	ground = Bodies.rectangle(width/2,height, width, 20,
		{
			isStatic: true
		})
	World.add(world, ground);
	Engine.run(engine);
}

function draw() {
	Engine.update(engine);

	rectMode(CENTER);
	background(255);

if(gameState==="start") {
	background(255, 255, 0);
	textSize(20);
	fill("red");
	text("This small game will teach you to throw trash in dustbin", 500, 200);
	text("press right arrow to start the game and up arrow to throw the ball", 500, 250);
	if (keyCode === RIGHT_ARROW) {
		gameState = "play";
	}
}
if(gameState==="play") {
  rectMode(CENTER);
  background(255);

  slingShot.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
	slingShot.fly();
}