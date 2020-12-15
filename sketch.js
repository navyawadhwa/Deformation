const { Font } = require("./p5");

var car1, car2, car3, wall;
var speed, weight;
var line1, line2, line3;
var play, stop,  state;
var deformation;

function setup() {
  createCanvas(1000,500);
 
  //cars
  car1=createSprite(50,45,50,20);
  car1.shapeColor=("red");

  car2=createSprite(50,215,50,20);
  car2.shapeColor=("green");

  car3=createSprite(50,385,50,20);
  car3.shapeColor=("yellow");

  //wall
  wall=createSprite(980,250,40,500);
  wall.shapeColor=("purple");

  //lines to divide various cars
  line1=createSprite(460,115,1000,6);
  line1.shapeColor=("white");

  line2=createSprite(460,305,1000,6);
  line2.shapeColor=("white");

  line3=createSprite(460,475,1000,6);
  line3.shapeColor=("white");

  //speed and weight
  speed=random(50,90);
  weight=random(400,1500);

  deformation=0.5*weight*speed*speed/22500;

  state=stop;
}

function draw() {
  background("black"); 
  
  

  if(state===stop){
    fill("white");
    textSize(24);
    text("PRESS SPACE TO BEGIN",380,230);

    if(keyDown("space")){
      state=play;
    }
  }

  else if(state===play){

    car1.velocityX=speed;
    car2.velocityX=speed;
    car3.velocityX=speed;

    if(car1.isTouching(wall)){
      car1.velocityX=0;
      fill("white");
      textSize(24);
      text("Deformation="+deformation, 100,45);

      if(deformation>180){
        text("C:"+"Needs Improvement",130,85);
      }

      if(deformation>80 && deformation<180){
        text("B:"+"Good",130,85);
      }

      if(deformation<80){
        text("A+:"+"Excellent",130,85);
      }
    }

    if(car2.isTouching(wall)){
      car2.velocityX=0;
      fill("white");
      textSize(24);
      text("Deformation="+deformation, 100,205);

      if(deformation>180){
        text("C:"+"Needs Improvement",130,245);
      }

      if(deformation>80 && deformation<180){
        text("B:"+"Good",130,245);
      }

      if(deformation<80){
        text("A+:"+"Excellent",130,245);
      }
    }

    if(car3.isTouching(wall)){
      car3.velocityX=0;
      fill("white");
      textSize(24);
      text("Deformation="+deformation, 100,375);

      if(deformation>180){
        text("C:"+"Needs Improvement",130,425);
      }

      if(deformation>80 && deformation<180){
        text("B:"+"Good",130,425);
      }

      if(deformation<80){
        text("A+:"+"Excellent",130,425);
      }
    }
   
  }

  drawSprites();

  fill("white");
  textSize(28);
  text("W",970,170);
  text("A",970,210);
  text("L",970,250);
  text("L",970,290);

}