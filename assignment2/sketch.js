let yTransform = 0;
// set y position variable for the dropping effect of raindrops
let strokeFillR;
let strokeFillG;
let strokeFillB;
// set color variables for stroke color
let strokeHasColor = false;
// let stroke only be colored once
      


function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background("#5b88adff");
  //set background color

  // set random color for raindrop stroke
  if (strokeHasColor == false) {
    strokeFillR = random(255);
    strokeFillG = random(255);
    strokeFillB = random(255); 
    // give the stroke random R, G, and B color variables
    strokeHasColor = true; 
    // when stroke already has a color, let random stop (let the color stays)
  }
    // every time the system runs(or page refreshes), the stroke color changes




  //draw columns of raindrops to fill the screen vertically
  for (let y = 20; y < height - 50; y += 100) {
    // the loop starts at y = 20;
    // for every loop when y < height-50, add y by 100
    let rainDropSpacing = map(y,50,height-50,100,40);
    // make spacing smaller as y-axis goes down

    //draw rows of raindrops to fill the screen horizontally
    for (let x = 50; x < width; x += rainDropSpacing) {
      // the for loop starts at x = 50;
      // for every loop when x < width, add x by the spacing value
      // the spacing value become smaller as it goes further down the screen
      // meaning that there will be more horizontal raindrops at the buttom
      

      push();
      translate(x, y); 
      //everything within this push/pop block will be centered with x,y as the center point
      

      let rainDropScale = map(y,50,height-50,1,0.25);
      // make the variable rainDropScale smaller as y-axis goes down
      scale(rainDropScale); 
      // assign the variable value to the scale of rain drops


      //create the dropping animation when mouse is pressed
      if (mouseIsPressed) {
        yTransform = yTransform+0.05; 
        // adds 0.05 to yTransform every frame
        translate(0, yTransform); 
        // translates downwards by yTransform
      } 
      else {
        yTransform = 0; 
        // lifting the mouse button up resets yTransform
      }


      // resets the dropping animation and also change the color of strokes
      if (yTransform >= height){ // when all the raindrops reach the bottom of the screen
        yTransform = 0; // resets the yTransform
        strokeHasColor = false; // resets the color randomizaton
      }

      
      // draw raindrop strokes
      strokeWeight(2); // set stroke weight
      stroke(strokeFillR, strokeFillG, strokeFillB, 200);
      // set the random color for the stroke, give it a bit of transparency

      
      fill('rgba(255, 255, 255, 0.67)');
      // give a color to the raindrops

      //draw raindrops' shape
      beginShape();
      vertex(0, 50); //tip of the rain drop: left
      vertex(25, 0); //tip of the rain drop: top
      vertex(50, 50); //tip of the rain drop: right
      endShape(); 
      arc(25, 50, 50, 50, radians(0), radians(180)); //bottom of the raindrop



      pop();



    }
  }

  
}
