var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(20 , 25 , 18 , 18)

var wall = createSprite(10 , 70 , 10 , 20)

//creating the player Sofia
var Sofia 

//creating the maze walls (wall1 - wall2)
  var wall1 = createSprite(10 ,70 ,100 ,20);
  wall1.shapeColor="brown";
  var wall2 = createSprite(100 ,50 ,20 ,150);
  wall2.shapeColor="brown"
  var wall3 = createSprite(160 ,25 , 100 ,20)
   wall3.shapeColor="brown"
  var wall4 = createSprite(90 ,155, 100 ,20)
   wall4.shapeColor="brown"
  var wall5 = createSprite
  
  var wall6 = createSprite
  
  var wall7 = createSprite
  
  var wall8 = createSprite
  
  var wall9 = createSprite
  
  var wall10 = createSprite
  
  var wall11 = createSprite
  
  var wall12 = createSprite
  
  var wall13 = createSprite
  
  var wall14 = createSprite
  
  var wal115 = createSprite
  
  var wall16 = createSprite
  
  
  var wall17 = createSprite
  
  var wall18 = createSprite
  
  var wall19 = createSprite
  
  var wall20 = createSprite
  
  var wall12 = createSprite
  
  var wall22 = createSprite
  

//create cup
var cup


  
function draw() {
  //setting the background color to pink
  background("pink");
  
  
if (keyDown("UP_ARROW")){
  Sofia.velocityX=0;
  sofia.velocityY=-4;
}

if (keyDown(DOWN_ARROW)) {
  Sofia.velocityX=-0
  Sofia.velocityY=-4
}


  


drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
