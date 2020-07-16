const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies;
function setup() {
  createCanvas(200,300);
  engine = Engine.create();
  world = engine.world;
  obstacle=new Obstacle(100,150,15);
  obstacle2= new Obstacle2(150,240,15);
  obstacle3= new Obstacle2(50,240,15);
  ball=new Ball(80,1,15);
  wall=new Wall(3,150,15) 
}

function draw() {
  background("purple");
  Engine.update(engine);
  Engine.update(engine);
  obstacle.display() 
  obstacle2.display() 
  obstacle3.display() 
 ball.display()
 wall.display()
}