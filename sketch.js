const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var world,engine;
var box1,ground,box2;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,380,800,20);
  box1=new Box(200,100,50,70);
  box2= new Box(230,50,40,60);
  
}

function draw() {
  background("red");  
  ground.display();
  box1.display();
  box2.display();
}