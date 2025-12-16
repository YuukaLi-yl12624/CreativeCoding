// https://github.com/justadudewhohacks/face-api.js/


// code written by Craig Fahner


let capture; // stores video feed
let result; // stores the prediction results
let showLandMarks = false; 
let uprightHeadMargin = 20;
let leftY = 0;
let rightY = 0;
let mouthOpenness = 0;


function setup() {
	createCanvas(640, 1024);
	// refer to https://p5js.org/reference/#/p5/createCapture
	capture = createCapture(VIDEO, async () => {
		// read machine learning models - refer to the library api doc https://github.com/justadudewhohacks/face-api.js/
		await faceapi.loadSsdMobilenetv1Model('./');
		await faceapi.loadFaceLandmarkModel('./');
		await faceapi.loadFaceRecognitionModel('./');
		await faceapi.loadFaceExpressionModel('./');
		getExpressions();
	});
	capture.size(640, 480);
	capture.hide(); // we will display the image inside of draw, so we don't need the HTML video element
}


async function getExpressions(){
	result = await faceapi.detectSingleFace(capture.elt).withFaceLandmarks().withFaceExpressions();
	getExpressions(); // recursively call getExpressions function forever
}


function draw() {
	
	if(leftY-rightY > uprightHeadMargin){
		background(255);
	} else if(rightY-leftY > uprightHeadMargin){
		background(127); 
	}
	else {
	background(0);
	}
	
	fill(0, 255, 0);
	textSize(20);
	//image(capture, 0, 0, 640, 480);
	if (!result) {
		//text('waiting for face detection', 0, 500);
	}
	else {
		if (showLandMarks) {
			drawFaceLandmarks();
		}
		let expressionsArray = sortExpressions();
		for(let i = 0; i<expressionsArray.length;i++){
			strokeWeight(0);
			fill(0, 255, 0);
			text(expressionsArray[i][0], 0, 520+(20*i)); // each expression comes as an array whose first element is the label, second element is the prediction between 0 and 1
			let scaledRectWidth = map(expressionsArray[i][1],0,1,50,640);
			rect(100,500+(20*i),scaledRectWidth,20);
			fill(0);
			text(expressionsArray[i][1].toFixed(2), 100, 520+(20*i));
		}
		fill(0,255,0);
		let strongestEmotion = expressionsArray[0][0];
		text(strongestEmotion,30,30);
		
		// let happyAmount = result.expressions.sad; // we can replace the 'sad' key with any of the 7 detectable expressions
		// happyAmount = map(happyAmount,0,1,0,255);// remap happy amount to 0-255
		// fill(0,0,happyAmount); // set fill colour to different amounts of blue depending on happiness
		// circle(width/2,height/4,100);
		
		// let happyAmount = map(result.expressions.happy,0,1,0,50);
		// fill(255,0,0); //red fill
		// circle(result.landmarks._positions[33]._x,result.landmarks._positions[33]._y, happyAmount);
	}
}


// draw landmarks over the face
function drawFaceLandmarks() {
	stroke(0, 255, 0);
	strokeWeight(2);
	for (let i = 0; i < result.landmarks._positions.length; i++) {
		let landmark = result.landmarks._positions[i];
		//point(landmark._x, landmark._y);
		textSize(12);
		text(i, landmark._x, landmark._y);
	}
	line(result.landmarks.positions[0].x,result.landmarks.positions[0].y,result.landmarks.positions[16].x,result.landmarks.positions[16].y)
  	line(result.landmarks.positions[62].x,result.landmarks.positions[62].y,result.landmarks.positions[66].x,result.landmarks.positions[66].y)
	leftY = result.landmarks.positions[16].y;
	rightY = result.landmarks.positions[0].y;
	mouthOpenness = dist(result.landmarks.positions[62].x,result.landmarks.positions[62].y,result.landmarks.positions[66].x,result.landmarks.positions[66].y);
}


function sortExpressions() {
	if(result.expressions != null){
		console.log(result.expressions);
		let unsortedExpressions = result.expressions;
		// Create items array
    let sortedExpressions = Object.keys(unsortedExpressions).map(function (key) {
      return [key, unsortedExpressions[key]];
    });


    // Sort the array based on the second element
    sortedExpressions.sort(function (first, second) {
      return second[1] - first[1];
    });
		
		return sortedExpressions;
	} else {
		return null;
	}
	
}
