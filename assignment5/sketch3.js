let speed = 0.01;
let noiseR = 0;
let noiseT = 0;
let radius = 500;

function setup() {
  createCanvas(400, 400);
  noiseX = random(100); 
	noiseY = random(100);
  colorMode(HSB);
}

function draw() {
  background("#bac4ccff");
  
	strokeWeight(3);
  
	let theta = map(noise(noiseT),0,1,0,360);
	let rad = map(noise(noiseR),0,1,0,radius);
	
	let xPos = cos(radians(theta))*rad;
	let yPos = sin(radians(theta))*rad;
	
	let hue = map(theta,0,360,0,255);
	let saturation = map(rad,0,radius,0,255);
  fill(hue, saturation,255);
  arc(100, 80, 50, 85, 0, PI, CHORD);

  noiseT+=speed;
	noiseR+=speed;

  


}
