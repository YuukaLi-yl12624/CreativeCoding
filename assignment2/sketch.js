let yTransform = 0;
// set y position variable for the dropping effect of raindrops
let fillR;
let fillG;
let fillB;
// set color variables for stroke fills
let fillHasColor = false;
// let stroke only be filled once
      


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}



function draw() {
  background("#5b88adff");
  //set background color

  //draw different columns of raindrops
  for (let y = 20; y < height - 50; y += 100) {
    // the loop starts at y = 50;
    // for every loop when y < height-50, add y by 100
    let rainDropSpacing = map(y,50,height-50,100,40);
    // make spacing smaller as y-axis goes down
    
    //draw different rows of raindrops
    for (let x = 50; x < width; x += rainDropSpacing) {
      // the for loop starts at x = 50;
      // for every loop when x < width, add x by the spacing amount


      push();
      //everything within this push/pop block will be centered with 0,0 as the center point
      translate(x, y); 
      let rainDropScale = map(y,50,height-50,1,0.25);
      scale(rainDropScale); 
      // make raindrop scale smaller as y-axis goes down

      
      // set random color for raindrop stroke
      if (fillHasColor == false) {
        fillR = random(255);
        fillG = random(255);
        fillB = random(255); // give stroke random R, G, and B variables
        fillHasColor = true; // stroke already has a color, let random stop (let the color stays)
      }


      //make the raindrop drop when mouse is pressed
      if (mouseIsPressed) {
        yTransform = yTransform+0.05; 
        // adds 0.01 to yTransform every frame
        translate(0, yTransform); 
        // translates downwards by yTransform
      } 
      else {
        yTransform = 0; 
        // lifting the mouse button up resets yTransform
      }




      // set stroke information for raindrops
      strokeWeight(2);
      stroke(fillR, fillG, fillB, 200);
      fill('rgba(255, 255, 255, 0.67)');
      


      //draw raindrops
      beginShape();
      vertex(0, 50);
      vertex(25, 0);
      vertex(50, 50);
      endShape(); //tip of the raindrop
      arc(25, 50, 50, 50, radians(0), radians(180)); //bottom of the raindrop



      pop();



    }
  }

  
}
