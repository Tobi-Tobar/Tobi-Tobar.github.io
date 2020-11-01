var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var initials ='tt'; //your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait77
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://tobi-tobar.github.io/images/skull.png');
    img2 = loadImage('https://tobi-tobar.github.io/images/star.png');
        img3 = loadImage('https://tobi-tobar.github.io/images/moon.png');
           img4 = loadImage('https://tobi-tobar.github.io/images/cloud.png');
             img5 = loadImage('https://tobi-tobar.github.io/images/pixelstar.png');
               img6 = loadImage('https://tobi-tobar.github.io/images/pixmoon.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(2);
    strokeWeight(60);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

   colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(100);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  colorMode(RGB);
  
  } else if (toolChoice == '3') {
    stroke(255, 204, 224);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
      } else if (toolChoice == '4') {
    stroke(255, 77, 148);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
 } else if (toolChoice == '5') { 
    image(img, mouseX, mouseY);
    
 } else if (toolChoice == '6') { 
    image(img2, mouseX, mouseY);
    
 } else if (toolChoice == '7') { 
    image(img3, mouseX, mouseY);
    
 } else if (toolChoice == '8') { 
    image(img4, mouseX, mouseY);
    
 }else if (toolChoice == '9') {
   image(img5, mouseX, mouseY);
    
    }else if (toolChoice == '0') {
   image(img6, mouseX, mouseY);
    
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
