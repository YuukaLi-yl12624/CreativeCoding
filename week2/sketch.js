

function setup() { //runs once at start
  createCanvas(windowWidth, windowHeight); 
  //createCanvas is a function that creates a canvas for the p5.js sketch to draw into. 
  //it takes two parameters, width and height. 
  //windowWidth and windowHeight are used to set the size to the full size.
  //";" = a new line.
  background(300);
  //changes background color.
}

function draw() { //runs in a loop after setup
  fill("#888084")
  noStroke()
  circle(200,200,40);
  //circle takes these parameters: x position, y position, diameter
  //tanuki's nose
  triangle(30, 75, 58, 20, 86, 75);
  //add a triangle (tanuki's left ear)
  triangle(350, 75, 378, 20, 406, 75);
  //add another triangle (tanuki's right ear)
  arc(200, 300, 200, 200, 0, PI + QUARTER_PI);
  //add an arc (tanuki's face)

 

}


