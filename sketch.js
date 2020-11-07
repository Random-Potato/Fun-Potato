const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var object, object2, object3, object4, object5;
var engine, world;
var ball;
var floor;
var nicePig, badPig;
var loga, logb, logc, logd;
var birdd;
var backgroundImage;

function preload(){
  backgroundImage = loadImage("sprites/bg.png")


}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object = new box(700,320,70,70);
  object2 = new box(920,320,70,70);
  nicePig = new pig(810,350);
  object3 = new box(700,240,70,70);
  object4 = new box(920,240,70,70);
  object5 = new box(810,160,70,70)
  badPig = new pig(810,220);
  floor = new ground(600,height,1200,20);
  loga = new log(810,260,300,PI/2);
  logb = new log(810,160,300,PI/2);
  logc = new log(760,120,150,PI/7);
  logd = new log(870,120,150,PI/-7);
  birdd = new bird(100,100);
}
function draw() {
  background(backgroundImage); 
  Engine.update(engine)
  object.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  floor.display();
  nicePig.display();
  loga.display();
  badPig.display();
  logb.display();
  logc.display();
  logd.display();
  birdd.display();
  birdd.visible = false;
}