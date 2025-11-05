let faces = [];
//set an empty array to store faces


function setup() {
  createCanvas(windowWidth, windowHeight);  //set canvas size
}


function draw() {
  background("#b6cbd7ff"); //set background color

  // the for loop repeats for every item in the array
  // so if there are 10 faces in the array
  // it will display all ten faces according
  // to their position in the array  
  for(let i = 0;i<faces.length;i++){
    faces[i].display(); // display the shapes that represent the faces
  }

}


function mousePressed(){
  let randomFace = floor(random(4));// floor rounds to lower number
  let randomEyes = floor(random(4));
  let randomHair = floor(random(4)); 
  let randomHairStyle = floor(random(2));
  //get a random index that represent one of the datas stored in the array
  //these are used later to determine the face, eyes, and hair colors of the faces

  let randomBeards = random(0,1);
  //get a random value between 0 to 1
  //this is used later to determine whether the faces have a beard

  let tempFace = new Face(mouseX,mouseY,randomFace,randomEyes,randomHair,randomHairStyle,randomBeards); 
  //draw a temporary new face
  faces.push(tempFace); 
  // "push" new variable into array

	for (let i = 0; i < faces.length; i++) {
		if (faces[i].hovering == true) { 
      //if mouse is hovering over a face when pressed
			faces.splice(i, 1); 
      //then the face disappears
		}
	}

}


class Face {
  constructor(x, y, faceColor, eyeColor, hairColor, hairStyle, beards) {
    let faceColors = ["#f6e2d2ff", "#f5c189ff", "#b07141ff", "#58321cff"];
    let eyeColors = ["#77cbdeff", "#8cc665ff", "#794222ff", "#29180eff"];
    let hairColors = ["#f8f0a1ff", "#76380eff","#181512ff", "#ffffff"];
    // store different colors for face, eye, and hair in the array
    let hairStyles = [0,100];
    // store different length for the hair
    
    this.faceColor = faceColors[faceColor];
    this.eyeColor = eyeColors[eyeColor];
    this.hairColor = hairColors[hairColor];
    this.hairStyle = hairStyles[hairStyle]; 
    //get the according color or length from the array for face, eyes, and hair
    this.beards = beards;
    //get the value for beards between 0 to 1

    this.hovering = false;
    //the default boolean for hovering is false

    this.x = x;
    this.y = y;

  }

  
  display() { // draw the faces
    push(); //every movement is stored between push() and pop()

    translate(this.x, this.y);
    //make the center of the face whereever the mouse presses on
    noStroke(); //no stroke.

    //face
    fill(this.faceColor); // fill the face with the randomized color eariler
    circle(0, 0, 100); // draw a circle to represent the face
    
    //eyes
    fill(this.eyeColor); // fill the eyes with the randomized color eariler
    circle(-13, -10, 10);
    circle(13, -10, 10); //draw two circles to represent the eyes
    
    //hair color
    fill(this.hairColor); // fill the hair with the randomized color eariler
    //hair length
    arc(0, 0, 100, this.hairStyle, PI, 0); 
    // draw an arc upside down to represent the hair
    // and determine the length of the hair by the randomized number eariler
  
    //mouth
    let mouseDist = dist(mouseX, mouseY, this.x, this.y); 
    // calculate the distance between the center of the face face and the mouse
    // to determine if the mouse is hovering over the face
    if (mouseDist < 50) { // 50=radius of face. Is mouse hovering over the face?
			fill("#eb4040ff"); 
      ellipse(0,20,15,20); //draw a red ellipse to represent an opened mouth
			this.hovering = true; // set to true if hovering
		} else {
			noFill();
      strokeWeight(4);
      stroke("black");
      arc(0, 5, 28, 28, 0.9*HALF_PI, PI-QUARTER_PI ); //draw a black arc to represent a closed smiling mouth
      noStroke(); //set it back to no stroke
			this.hovering = false; // set to false if not hovering
		}

    //beard (layers on the top of the mouth to cover it)
    if (this.beards <= 0.5) { 
      // get the randomized value between 0 to 1 and set the possibilities to half and half
      // this way, half of the faces will have beards
    fill(this.hairColor); // hair and beards use the same color
    quad(-10, 8, 10, 8, 15, 22, -15, 22); // draw a shape to represent the beard
    }

    pop();
  }

  
}
