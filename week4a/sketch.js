

function setup() {
  createCanvas(windowWidth, windowHeight);
  

}



//...every time you are coping and pasting excessively
//it is a good sign that something can be made easier...

  //for loop
  for(let i = 50; i<10; i++) {
    console.log(i);
    //(variable declaration; 
    //condition or limit(loops until this is true);
    //iteration rule(how each loop will do)
    //
    //i++: adds 1 to i
    //i+=10: adds 10 to i
    //i-- = subtracts 1 from i
    //i-=5: subtracts 5 from i
  }



function draw() {
  background("#cec4e7ff");

  for(let y=50; y<height-50; y+=100){
  for(let x=50; x<width; x+=100){

  push();
  
  translate(x,y);  //everything within this push/pop block will be centered with 0,0 as the center point

  let rotation;
  rotation = map(y,50,height-50,0,PI);
  rotate(rotation);

  let randomRotation;
  let randomAmount=0.075;
  let randomXDisp;
  let randomYDisp;

  randomXDisp = random(-y*randomAmount,y*randomAmount);
  randomYDisp = random(-y*randomAmount,y*randomAmount);
  if(mouseIsPressed){ //it assumes this to be ==true
    translate(randomXDisp,0);
  }
  

  fill("#eee8b9ff");

  circle(0,0,100);
  circle(-15,-10,10);
  circle(15,-10,10);
  let happiness;
  happiness = map (x,0,width,25,25);
  arc(0,0,60,60,radians(0-happiness),radians(150+happiness));


  pop();

  }

}

}
