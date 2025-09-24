

function setup() { //runs once at start
  createCanvas(windowWidth, windowHeight); 
  //createCanvas is a function that creates a canvas for the p5.js sketch to draw into. 
  //it takes two parameters, width and height. 
  //windowWidth and windowHeight are used to set the size to the full size.
  //";" = a new line.
  background("#9e7a5fff");
  //changes background color.
}

function draw() { //runs in a loop after setup
  fill("#604338ff")
  noStroke()
  triangle(30+60, 75+60, 58+60, 20+60, 86+60, 75+60);
  //add a triangle (tanuki's left ear)
  triangle(270, 135, 298, 80, 326, 135);
  //add another triangle (tanuki's right ear)
  circle(200,260,200);
  //add a circle (tanuki's face - outside)
  fill("#9e7a5fff");
  circle(200,200,100);
  //add another circle (tanuki's face - inside)
  fill("#604338ff")
  circle(200,180,40);
  //tanuki's nose
 

}


