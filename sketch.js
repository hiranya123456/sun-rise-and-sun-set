const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var bg="sunrise1.png"




function preload() {
    
    gettime();
}

function setup(){
var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
  if(backgroundimage )
     background(backgroundimage);
        
     Engine.update(engine);
     textSize(50);
    // write code to display time in correct format here
     if(hour >= 12 ){
      text("TIME : " + hour %12+ "pm",50,50);

    }else if(hour==0) {
      text("TIME :12 am " , 100,100);

    }
    else {

      text("TIME : " + hour %12+ "am",50,50);



    }


}
async function gettime(){
   
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
   var j = await response.json();
   var daytime = j.datetime;
   var hour =  daytime.slice(11,13);
   
   if(hour >= 04 && hour<= 06){
      debugger
       bg = "sunrise1.png";
   }else if(hour >= 06 && hour <= 08){
      debugger
       bg = "sunrise2.png";
   }else if(hour >= 11 && hour <= 13){
      debugger
       bg = "sunrise3.png";
   }else if(hour >= 15 && hour <= 17){
      debugger
       bg = "sunrise4.png";
   }else if(hour >= 17 && hour <= 20){
      debugger
       bg = "sunset5.png";
   }else if(hour >= 20 && hour <= 22){
      debugger
      bg = "sunset6.png";
   }else if(hour >= 22 && hour <= 23){
      debugger
       bg = "sunset7.png";
      }
   else if(hour >= 23 && hour ==0){
         debugger
        bg = "sunset10.png";
   }else if(hour==0 && hour <=03){
      debugger
     bg = "sunset11.png";
   }else {
   debugger
  bg = "sunset12.png";

}
      backgroundimage = loadImage(bg);
      console.log(hour);
   
}   