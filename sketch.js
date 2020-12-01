const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, tree1, ground1, stone, mango;
var boy1, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	tree = loadImage("tree.png");
	stone = loadImage("stone.png");
	mango = loadImage("mango.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(550,500,1400,10);
	
	tree1 = new Tree(700,5,100,200)

	boy1 = createSprite(200,430,20,20)
	boy1.addImage(boyImg)
	boy1.scale = 0.1

	stone = new Stone(130,350,40)
	stone.scale = 0.5

	mango1 = new Mango(900,200,30);
	mango2 = new Mango(800,200,30);
	mango3 = new Mango(860,150,30);
	mango4 = new Mango(900,45,30);
	mango5 = new Mango(1000,150,30);
	mango6 = new Mango(950,100,30);
	mango7 = new Mango(1100,190,40);

	launcher1 = new Launcher(stone.body,{x:150,y:380})
  
}


function draw() {
rectMode(CENTER);
background(255);
  Engine.update(engine);

 boy1.display();
 stone.display();
 ground1.display();
 tree1.display(); 
 
 mango1.display();
 mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  launcher1.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  keyPressed();
  
 drawSprites();
 
}


function mouseDragged(){
    
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
    
    launcher1.fly();

}

function detectCollision(stone,mango1){
	mangoBodyPosition=mango1.body.position
	stoneBodyPosition=stone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango1.r+stone.r)
	{
		Matter.Body.setStatic(mango1.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher1.attach(stone.body);
	}

}