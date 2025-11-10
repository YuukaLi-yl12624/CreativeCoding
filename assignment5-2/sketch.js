let speed = 0.01;
let noiseX = 0;
let noiseY = 0;


function setup() {
  createCanvas(400, 400);
  noiseX = random(100); 
	noiseY = random(100);
}

function draw() {
  background("#bac4ccff");
  
	strokeWeight(3);
  

  let xBlue = map(noise(noiseX),0,1,0,width); 
	let yBlue = map(noise(noiseY),0,1,0,height);

  fill("#0d6bc9ff"); 
  rect(xBlue,yBlue,50,80,70); 
  fill("rgba(255, 255, 255, 1)");
  rect(xBlue-10,yBlue+15,40,20,30);   

  noiseX+=speed;
	noiseY+=speed;



}
