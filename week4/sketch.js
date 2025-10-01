

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //all transformation is reset at the beginning of draw
  background("#66ccff");
  
  circle(100,100,100);
  circle(85,90,5);
  circle(115,90,5);
  arc(100,100,60,60,0,PI);


  //translate is a transformation function
  //it moves the coordinate matric according to a new set of coordinates, which become the "new" 0,0
  //
  //push and pop isolate a transformation
  //anything enclosed within push and pop only applies with in that enclosure
  push(); //indicates the beginning of the isolated segment
  

  if(mouseX > width/2 && mouseY > height/2) { //if the test inside the () is met...
    //run this code
    //"==" = "equals", "!=" = "not equal", ">=" and "<=" 
    //"&&" = AND (both conditions must be true)
    //"||" = OR
    fill("pink");  
  } 
  else if(mouseX<width/2 && mouseY<height/2) {
    fill("orange");
  } 
  else { //otherwise...
    //run this code
    fill("beige");
  }

  //mouseispressed is a system variable that switch from false to true when mouse is down
  if (mouseIsPressed == true) {
    //boolean: TRUE or FALSE only
    fill("red");
  }

  
  translate(width/2,height/2);
  

  let angle;
  angle = map(mouseX,0,width,0,360);
  //map is a function that scales number porpotionally
  //parameters: 
  //1: input variable to scale
  //2: low end of input range
  //3: high end of input range
  //4: low end of the output range
  rotate(angle); //it rotates according to the translate point


  let scaleFactor; //variable to hold scale amount
  scaleFactor = map(mouseY,0,height,0.1,3);
  //scale makes the coordinate system larger or smaller
  //it takes a "factor" as a parameter
  //if you apply two parameters, it scales differently on x and y axes
  scale(scaleFactor);


  circle(0,0,100);
  circle(-15,-10,5);
  circle(15,-10,5);
  arc(0,0,60,60,0,PI);


  pop();

  //text function test
  text(mouseX+","+mouseY,5,15);

}
