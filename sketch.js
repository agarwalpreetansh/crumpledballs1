
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var engine,world;
var box1;
var ground;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ground_options={
	isStatic:true
}


	ground= Bodies.rectangle(width/2,670,width,20,ground_options);
	World.add(world,ground)


	box1=new Box(650,650,200,20)
	box2=new Box(550,610,20,100)
	box3=new Box(750,610,20,100)
	paper1=new paper(10,450,40);
	
      var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
rect(ground.position.x,ground.position.y,1000,20);
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  
  drawSprites();

}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
}
}


