//Global Variables
var bananaImage
var obstacleImage
var obstacleGroup
var score = 0;
var backImage
var player
var foodGroup;


function preload() {
  backImage = loadImage("jungle.jpg");
  player_running =
    loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");



  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png");

}


function setup() {
  createCanvas(600, 300);
  backImage1 = createSprite(200, 200, 20, 20);
  backImage1.addImage("back", backImage);
  backImage1.velocityX = -5;

  player1 = createSprite(200, 275, 20, 20)
  player1.addAnimation("running", player_running);
  player1.scale = 0.1;

  //ground.visible = false



  Score = 0
  foodGroup = new Group();

}

function draw() {
  //background(255); 
  backImage1.velocityX = -5;
  //backImage1.x = backImage1.width/2;

 if (keyDown("space") && player1.y >= 359) {
    player1.velocityY = -12; 
}
  
 


  if (backImage1.x < 0) {
    backImage1.x = backImage1.width / 2;
  }

  text(Score, 20, 20);

  if (foodGroup.isTouching(player1)) {
    Score = Score + 2 && foodGroup.destroyEach();
  }

  switch (Score) {
    case 10:
      player1.scale = 0.12;
      break;
    case 20:
      player1.scale = 0.14;
      break;
    case 30:
      player1.scale = 0.16;
      break;
    case 40:
      player1.scale = 0.18;
      break;
    default:
      break;
  }

  if (foodGroup.isTouching(player1)) {
    player1.scale = 0.2;
  }

  spawnFood();

  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score, 500, 50);


}

function spawnFood() {
  if (frameCount % 60 === 0) {
    var food = createSprite(600, 150, 10, 40);
    food.addImage(bananaImage);
    food.velocityX = -4;
    food.lifetime = 300;
    food.scale = 0.05;
    //add each obstacle to the group
    foodGroup.add(food);
  }
}