
var mR,fR,ans;
function setup() {
  createCanvas(1200,800);
 mR=createSprite(400,200,80,30);
 mR.shapeColor="green";
 fR=createSprite(600,400,50,80);
 fR.shapeColor="green";

 mR.debug=true;
 fR.debug=true;
 //ans=mR.width/2+fR.width/2;
}

function draw() {

  
  background(0,0,0);
  
  mR.x=World.mouseX;
  mR.y=World.mouseY;
//right hand side 


if(mR.x-fR.x < mR.width/2+fR.width/2
  &&fR.x-mR.x < fR.width/2+mR.width/2
  && mR.y-fR.y < fR.width/2+mR.width/2
  &&fR.y-mR.y < mR.width/2+fR.width/2)

  {
  fR.shapeColor="red";
  mR.shapeColor="red";
}
else{
  fR.shapeColor="green";
  mR.shapeColor="green";

}



  drawSprites();
}