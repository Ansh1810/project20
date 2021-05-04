var bgImage;
var cat,mouse;
function preload() {
    //load the images here
    bgImage = loadImage ("images/garden.png")
    catImage = loadImage ("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImage3 = loadAnimation ("images/cat4.png");
    mouseImage = loadImage ("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseImage3 = loadAnimation ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(780, 668, 20, 40)
cat.addImage ("catImage",catImage);
cat.scale = 0.2;
mouse = createSprite(102, 668, 20, 40)
mouse.addImage ("mouseImage",mouseImage);
mouse.scale = 0.2

}

function draw() {

    background(bgImage);
    fill("white")
    text(mouseX + "," + mouseY, mouseX, mouseY)
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   
    //Write condition here to evalute if tom and jerry collide
   cat.addAnimation("catRunning", catImage3);
   cat.changeAnimation ("catRunning");
   cat.velocityX = 0;
   cat.x = 780;
   cat.y = 668;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
mouse.addAnimation("mouseTeasing", mouseImage2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;


}
if(keyCode === LEFT_ARROW){
    cat.addAnimation("mouseTeasing", catImage2);
    cat.changeAnimation("mouseTeasing");
    cat.frameDelay = 25;
    cat.x = cat.x - 11;
    
    }
}
