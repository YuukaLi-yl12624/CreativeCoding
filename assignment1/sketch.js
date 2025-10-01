let ropeColor1 = "rgba(167, 167, 167, 1)";
let ropeColor2 = "rgba(121, 82, 61, 1)";
//declare varibles for colors that will be used later

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {


noStroke();
//sky
fill("rgba(132, 172, 180, 1)");
rect(0,0,windowWidth,windowHeight/4);
//first big background rectangle
fill("rgba(101, 147, 164, 1)");
rect(0,windowHeight/2,windowWidth,windowHeight/4);
//third big background rectangle


//sea
fill("rgba(48, 108, 128, 1)");
rect(0,windowHeight/4*3,windowWidth,windowHeight/4);
//bottom big rectangle in the background


//sail side ropes
strokeWeight(5)
stroke(ropeColor1);
line(windowWidth/70,windowHeight/2,windowWidth/70,windowHeight);
stroke(ropeColor2);
line(windowWidth/35,windowHeight/2,windowWidth/35,windowHeight);
//two lines at the bottom left
stroke(ropeColor1);
line(windowWidth*0.88,windowHeight/2,windowWidth*0.99,windowHeight);
stroke(ropeColor2);
line(windowWidth*0.86,windowHeight/2,windowWidth*0.97,windowHeight);
//two lines at the bottom right


//sky
noStroke();
fill("rgba(111, 154, 170, 1)");
rect(0,windowHeight/4,windowWidth,windowHeight/4);
//second big background rectangle


//clouds
fill("#c5c8ccff");
rect(windowWidth/8,windowHeight/4-(windowWidth+windowHeight)/20,(windowWidth+windowHeight)/20);
//top left small square
rect(windowWidth/1.4,windowHeight/4-(windowWidth+windowHeight)/17,(windowWidth+windowHeight)/17);
//top right small square
fill("#babdc1ff");
rect(windowWidth/8, windowHeight/5*3, windowWidth/10, windowHeight/4.5)
//bottom left rectangle


//sailboat's front sails
fill("#760c0cff");
beginShape();
  vertex(windowWidth/1.25,windowHeight/5); 
  vertex(windowWidth/1.6,windowHeight/10); 
  vertex(windowWidth/1.6,windowHeight/3); 
  vertex(windowWidth/1.25,windowHeight/3); 
endShape();
//top Trapezoid (sail's flag)
fill("#8e807fff");
beginShape();
  vertex(windowWidth/1.7,windowHeight/2.4); 
  vertex(windowWidth/1.7,windowHeight/1.7); 
  vertex(windowWidth/1.38,windowHeight/1.7); 
  vertex(windowWidth/1.38,windowHeight/3); 
endShape();
//middle Trapezoid


//person
fill("#000000"); 
rect(windowWidth/1.38-(windowHeight+windowWidth)/25,windowHeight/1.25-(windowHeight+windowWidth)/25, (windowHeight+windowWidth)/25);
//hair
fill("#553528ff"); 
rect(windowWidth/1.48, windowHeight/1.34, windowWidth/9, windowHeight);
//body


//front sail part 2
fill("#9e9394ff");
beginShape();
  vertex(windowWidth/1.17,windowHeight/1.98); 
  vertex(windowWidth/1.38,windowHeight/1.7); 
  vertex(windowWidth/1.38,windowHeight/1.25); 
  vertex(windowWidth/1.08,windowHeight/1.25); 
endShape();
//bottom Trapezoid
fill("#7c6e6dff");
beginShape();
  vertex(windowWidth/1.64,windowHeight/1.25); 
  vertex(windowWidth/3.5,windowHeight/1.25); 
  vertex(windowWidth/1.64,windowHeight); 
endShape();
//bottom bottom triangle


//back sails
noStroke();
fill("#324a6dff");
beginShape();
  vertex(windowWidth/1.95,windowHeight/26); 
  vertex(windowWidth/5,windowHeight/3.2); 
  vertex(windowWidth/1.71,windowHeight/1.7); 
endShape();
//top triangle sail
beginShape();
  vertex(windowWidth/1.71,windowHeight*0.42); 
  vertex(windowWidth/5.8,windowHeight*0.75); 
  vertex(windowWidth/1.95,windowHeight*0.94); 
endShape();
//bottom triangle sail
strokeWeight(1.5);
stroke('rgba(255, 255, 255, 0.33)');
noFill();
beginShape();
  vertex(width/1.75,windowHeight*0.43); 
  vertex(windowWidth/2.1,windowHeight*0.51); 
  vertex(windowWidth/1.75,windowHeight*0.58); 
endShape();
//middle trianglar stroke


//sail side ropes
strokeWeight(5)
stroke(ropeColor1);
line(windowWidth/20,0,windowWidth/20,windowHeight*0.52);
stroke(ropeColor2);
line(windowWidth/15,0,windowWidth/15,windowHeight*0.52);
//two lines at the top left
stroke(ropeColor1);
line(windowWidth,0,windowWidth-windowWidth*0.1,windowHeight*0.5);
stroke(ropeColor2);
line(windowWidth*0.985,0,windowWidth*0.985-windowWidth*0.1,windowHeight*0.5);
//two lines at the top right


//sail top&bottom ropes
strokeWeight(5);
stroke('rgba(129, 109, 90, 1)');
beginShape();
	curveVertex(50,4); //control point 
	curveVertex(0,0+0.02*windowHeight);
	curveVertex(windowWidth*0.3, windowHeight*0.05);
	curveVertex(windowWidth,0);
	curveVertex(25,4); //control point 
endShape();
//top curve
beginShape();
	curveVertex(windowWidth,windowHeight);  
	curveVertex(0,windowHeight*0.98);
	curveVertex(windowWidth*0.7, windowHeight*0.94);
	curveVertex(windowWidth,windowHeight*0.99);
	curveVertex(windowWidth,windowHeight); 
endShape();
//buttom curve


//sail rod
strokeWeight(5);
	stroke('rgba(71, 44, 60, 1)');
	noFill();
	beginShape();
	curveVertex(0, 0); //control point 1
	curveVertex(windowWidth*0.4, -windowHeight*0.2);//beginning of line 
	curveVertex(windowWidth*0.58, windowHeight/2);
  curveVertex(windowWidth*0.4, windowHeight+windowHeight*0.2); //end of line
	curveVertex(0, windowHeight); //control point 2
	endShape();
// curve: sail rod



}
