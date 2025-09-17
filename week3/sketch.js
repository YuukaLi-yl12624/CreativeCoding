//varible declaration
//"let" is a keyword that allows you to declare a vaiable
//in the below example, a new variable is being created
//called "circleSize" whcih is storing a number (125)

let circleSize = 30; //example comment: variable to store circle size
let emptyVariable; //you can assign it to a value later


function setup() {
  createCanvas(800,800);
  //create a canvas with length and width 400 pixel
  emptyVariable = width*0.4 //sets a variable in relation to width

}


function draw() {
  
  //a grayscale color is denotes as a number 0-255  ex:background(127) 
  //an rgb color is denotes as 3 numbers  ex:background(127, 0, 0)
  //we can also use the name of the color  ex:background("black")
  // //"quote" = string
  //background("rgb(127,0,0)")gives you a color selector  
  background("rgba(51, 49, 70, 1)");


  noStroke();
  fill("#24242bff");
  rect(0,0,width/2,height/2); //a square in the top left corner
  rect(width/2,height/2,width,height); //another square
  //shapes render in order and later ones go on top of eariler ones


  stroke("rgba(0, 0, 0, 1)");
  strokeWeight(2);
  circle(100,300,circleSize); 
  //circle takes 3 parameters, x,y,andz 
  // //x and y is the center coordinate of the circle, z is diameter)


  fill("rgba(10, 153, 230, 1)");
  strokeWeight(5);
  //noStroke(); = strokeWeight(0);
  ellipse(200,130,150,250);
  //(x,y,w,h) = (top left corner, top left corner, weight, height)


  fill("rgba(255, 255, 255, 1)");
  //setting new fill for the rectangle below
  rect(105,80,100,35);
  //(x,y,w,h) 


  line(180,250,220,250);
  //(x1,y1,(to)x2,y2)


  beginShape();
  //use this to draw complex polygons more than two coordinates
  //create a beginShape function and an endShape function
  //any vertex function placed between these two will be rendered as points in a complete polygon
  vertex(275,75); //top left coordinate
  vertex(300,75); //top right
  vertex(300,200); //buttom left
  vertex(275,200); //buttom right
  //
  endShape();
  //endShape() leaves the polygon open, and endShape(CLOSE) closes the polygon


  fill("#cc1212ff"); //hex note also works
  rect(200,130+200,150,250,70); //(x,y,w,h,corner degree)
  //javascript can do math. It can do anything a calculator can do
  

  fill("rgba(255, 255, 255, 1)");
  rect(width/2.9,height/2.05,100,50,30);   
  //this way the shape will always have the fixed position and porpotionate to the window size
  
  
  //system variables: width, height, mouseX = x mouse position, mouseY
  stroke("rgba(255, 255, 255, 1)"); noFill();
  circle(mouseX,mouseY,mouseX/4,mouseY/4); //play with it.


  fill("#ffd503ff"); stroke("rgba(0, 0, 0, 1)");
  //arcs are like ellipses, except they have two extre parameters
  arc(width/2, height*0.25, 100, 100, PI*2, radians(30-mouseX), PIE);
  //(top left corner, top left corner, weight, height, START, END (in RADIANS format), how you want to close it)
  //you can convert degrees to radians using the radians function




}
