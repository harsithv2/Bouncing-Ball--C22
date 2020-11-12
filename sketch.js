const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground= Bodies.rectangle(200,380,400,20,{isStatic: true})
World.add(world, ground)
ball=Bodies.circle(100,100,20,{restitution: 1})
World.add(world,ball)
 }

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}