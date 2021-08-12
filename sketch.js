var chrono
function preload(){





}
function setup(){
createCanvas(1000,500);
chrono=createSprite(100,400);
chrono.shapeColor="blue";

}
function draw(){
background("red");
//calling the keycontrol funtion
keyControls();






drawSprites()
}
// this is a function definition of keycontrols 



function keyControls(){
  if (keyDown (RIGHT_ARROW)) {
    chrono.x=chrono.x+5
      
      
    }
    if (keyDown (UP_ARROW)) {
      chrono.y=chrono.y-5
        
        
      }
      if (keyDown (DOWN_ARROW)) {
        chrono.y=chrono.y+5
          
          
        }
}