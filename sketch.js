const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine;
var myworld;
var ground;

var box1;
var box2;

function setup() {
  createCanvas(400,400);
  
  myengine = Engine.create();
  myworld = myengine.world;

 ground = new Ground(200,390,400,20)



  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  
}

function draw() {
  background(0);  

  Engine.update(myengine);

 

ground.display();
box1.display();
box2.display();
}