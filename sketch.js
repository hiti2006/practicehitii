var fixed,moving,object 




function setup() {
  createCanvas(800,400);
   fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(400,350,50,45)
  fixed.shapeColor="yellow"
  moving.shapeColor="blue" 
 object=createSprite(700,200,100,100)
object.velocityX=-7
object.shapeColor="green"

}

function draw() {
  background("white"); 
  moving.y=mouseY
  moving.x=mouseX 
  bounceoff(object,fixed)
  if(bb(object,fixed)){
    object.shapeColor="black"
    fixed.shapeColor="red"
  } 
  else{

    object.shapeColor="yellow"
    moving.shapeColor="blue"
  }
  drawSprites();
}

function bb(moving,fixed){

  if(moving.x-fixed.x<=moving.width/2+fixed.width/2
    && fixed.x-moving.x<=fixed.width/2+moving.width/2
    &&moving.y-fixed.y<=moving.height/2+fixed.height/2
    && fixed.y-moving.y<=fixed.height/2+moving.height/2){
    return true 
    }
    else{
    return false  
    }
  }
  function bounceoff(moving,fixed){
    if(moving.x-fixed.x<=moving.width/2+fixed.width/2
      && fixed.x-moving.x<=fixed.width/2+moving.width/2){
        moving.velocityX=moving.velocityX-2*moving.velocityX
        fixed.velocityX=fixed.velocityX-2*fixed.velocityX

      }
if( moving.y-fixed.y<=moving.height/2+fixed.height/2
  && fixed.y-moving.y<=fixed.height/2+moving.height/2){
    moving.velocityY=moving.velocityY-2*moving.velocityY
    fixed.velocityY=fixed.velocityY-2*fixed.velocityY
  }
  }

