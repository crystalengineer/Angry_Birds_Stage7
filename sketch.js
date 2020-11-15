/*
//Examples on different data types used in JavaScript

//String
var string = "hello world";
console.log(string);

//Number
var num = 100.9;
console.log(num);

//Boolean
var bool = true
console.log(bool);

//Undefined
var a;
console.log(a);

//null
//ressign the same undefined variable to null
a = null;
console.log(a);

//empty array
var arr1 = [];
console.log(arr1);

//ressign the empty array with values of same data type
arr1 = [1,2,3,4,5];
console.log(arr1);

//array with values of different data type
var arr2 = [34.56, "simran", false];
console.log(arr2);

//array storing a list of arrays
var arr3 = [[1,2], ["hello", "world"], [4.5, "night", true]];
console.log(arr3);

//accessing the first element of arr3
console.log(arr3[0]);

//accesing the first element of first element of arr3
console.log(arr3[0][0]);

//accesing the second element of second element of arr3
console.log(arr3[1][1]);

//pushing new values in array
arr3.push("orange");
arr3.push(98989.567);
console.log(arr3);

//pop out the last element of array
arr3.pop();
console.log(arr3); */







const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   if(gameState !== "launched") {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   }
   
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}