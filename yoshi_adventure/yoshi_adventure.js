var ballx = 450;
var bally = 150;
var ballSize = 80;
var score =0;
var gameState= "L1";

function preload() {
  bgk1 = loadImage('https://tobi-tobar.github.io/images/yoshibg3.png');
  bgk2 = loadImage('https://tobi-tobar.github.io/images/yoshibg1.png');
  finalbgk = loadImage('https://tobi-tobar.github.io/images/yoshibg.png');
  egg = loadImage('https://tobi-tobar.github.io/images/greenegg.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="Congrats!"){
    endScreen();
  }
  
  text(("Eggs Collected: " + score), width/2, 40);

} // end draw


function levelOne(){
  background(bgk1);
  fill(255,255,255);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/4){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>4){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(egg, ballx, bally, ballSize, ballSize);
  
  
} // end level one

function levelTwo(){
  background(bgk2);
  fill(255, 255, 255);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>9){
// lvel 3
   gameState = "Congrats!";
  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(egg, ballx, bally, ballSize, ballSize);
} // end level two

function endScreen(){ // win game
  background(finalbgk);
  fill('black');
  text("You have collected all the Eggs! An adventure awaits!", width/2, height -450);
}
