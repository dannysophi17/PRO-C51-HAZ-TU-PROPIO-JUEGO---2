var PLAY = 1;
var END = 0;
var gameState = PLAY;

var plant, plant_running, plant_death;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3;

var score;
var music;
var gameOverImg;

function preload(){
  plant_running = loadAnimation("plant1.png","plant2.png"); 
  plant_death = loadAnimation("plant_zombie.png");
  
  groundImage = loadImage("ground.png");
  
  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");

  gameOverImg = loadImage("gameOver.png")

  music = loadSound("music.mp3")
 
}

function setup() {
  createCanvas(600, 200);
  music.loop();

  plant = createSprite(50,160,20,50);
  plant.addAnimation("running", plant_running);
  plant.addAnimation("collided", plant_death);
  plant.scale = 0.6;
  
  ground = createSprite(200,150,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1.5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();

  plant.setCollider("circle",0,0,40);
  plant.debug = false

  score = 0;
  
  
}

function draw() {
  background("black");
  text("Score: "+ score, 500,50);

 


    drawSprites();
  }
  



function spawnObstacles(){
    if (frameCount % 80=== 0){
      var obstacle = createSprite(600,165,10,40);
     
                
       obstacle.scale = 0.55;
       obstacle.lifetime = 300;
      
      obstaclesGroup.add(obstacle);
    }
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)

    
   cloudsGroup.add(cloud);
    
    
    }
}

    

      

        
