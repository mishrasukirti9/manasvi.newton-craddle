
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(600,height/5,width/2,20);

	bobDiameter=20;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX,startBobPositionY,bobDiameter);

	//bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	//bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	//bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	//bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	//bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	//Create the Bodies Here.


	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0)
	rope5=new rope(bobObject5.body,roofObject.body,0,0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1,0)
	rope3=new rope(bobObject3.body,roofObject.body,bobDiameter*2,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  text(mouseX+","+mouseY,mouseX,mouseY)
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


