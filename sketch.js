//Create variables here
var soldier, soldierImg;
var farmer, farmerImg;
var dialogue, dialogueImg;

function preload(){
soldierImg = loadImage("images/soldier.png");
farmerImg = loadImage("images/farmer.png");
dialogueImg = loadImage("images/dialogue.png");
}

function setup(){
  createCanvas(1450, 600);
  soldier = createSprite(100, 450);
  soldier.addImage("soldier",soldierImg);
  soldier.scale = 0.4;

  farmer = createSprite(1000, 500);
  farmer.addImage("farmer", farmerImg);
  farmer.scale = 0.4;
}

function draw(){
  background(183, 44, 97)

  if(keyWentDown(RIGHT_ARROW)){
    soldier.x = soldier.x + 50;
  }

  if(keyWentDown(LEFT_ARROW)){
    soldier.x = soldier.x - 50;
  }

  if(soldier.x > 800){
    dialogue = createSprite(850, 200);
    dialogue.addImage("dialogue", dialogueImg);
    dialogue.scale = 0.5;
  }


  if (mousePressedOver(dialogueImg)) {
    dialogueImg.visible = false;
  }
  drawSprites();
  textSize(20);
  fill(0);
  text("Press Arrow Keys to move the Soldier", 500, 50);
  
  drawSprites();
}