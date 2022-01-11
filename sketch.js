const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "snow1.jpg";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

  
   
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();

    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;

    // slice the datetime to extract hour
    var hour = datetime.slice(11,13);
    
    if(hour>=0 && hour<18 ){
        bg = "snow1.jpg";
    }
    else{
        bg="snow2.jpg"
    }
    
    backgroundImg = loadImage(bg);
}
