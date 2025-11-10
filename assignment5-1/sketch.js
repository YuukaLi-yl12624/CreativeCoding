let speed = 0.01;
// determines the speed the noise value goes up and down
let noisePosition = 0;
// 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#bac4ccff");
  
	strokeWeight(3);
  
  let redAmongus = noise(noisePosition);
  console.log("raw perlin noise output: " + redAmongus); 
	redAmongus = map(redAmongus,0,1,0,height); 

  fill("#cc1212ff"); 
  rect(redAmongus,redAmongus,50,80,70); 
  fill("rgba(255, 255, 255, 1)");
  rect(redAmongus+20,redAmongus+15,40,20,30);   
  
  noisePosition = noisePosition + speed;



}
