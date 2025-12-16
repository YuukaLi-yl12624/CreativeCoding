// To make different things happen in different time, I determined different stages
// Therefore, different parts of the code run when the stage # is different

// ===== Stage 0 variables =====
let stage = 0; // the start of the game
let background0; 
let NameInput; 
let ConfirmBtn; 
let savedUsername = "";

// ===== Stage 1 variables =====
// ML5 Sentiment variables
let background12;
let sentiment;
let sendBtn;
let inputBox;
// display variables
let analyzedChat = "";
let MeroResponse = "";

// ===== Stage 2 elements =====
// character dialogues on stage 2
let MeroChats = [
  // this is the pool where a random chat will be pulled and outputed when the user goes to the next frame
  "Recently I have been...emmm...playing games, like usual. ",
  "Isn't it winter time now? It's so cold outside, so I don't wanna go out at all...!",
  "Well...I live in Tokyo, and recently it's been freezing. Where do you live?",
  "The most recent game I brought was Yume Chakushin. You know, the one that's been viral recently...I will play that next week, no, this week!",
  "My lunch today was rice sushi. That's basically rice over another pile of rice...sounds tasty, doesn't it?",
  "It's almost Christmas season!! Is everyone excited?? You have someone to stay with during Christmas? Well, I don't, so you better be alone too and come watch my stream!",
  "Is there a game you want me to play? Send them in the chat! Although I might not listen..hehe.",
  "You want to see my room? I-I mean...It's too messy to show, so not right now!",
  "Why am I not at school at this time? I don't go to school anymore!",
  "Why do I wear my school uniform? Because this is my only nice cloth...Wait, I'm joking! I'm joking!" ];
// this variable holds the random chat picked for stage 2
  let MeroRandomChat = "";
// these are the responses of the character after the user send some chat and the system analyzes the chat's sentiment
// and the character responses depending on how positive the chat is
let PositiveResponse = [
  "Oh, you are interested in what I said, aren't you? You want to hear more about my life? Of course.",
  "Oh, okay...sounds good. I'm glad to hear that...Anyways! let's keep going. "];
let NeutralResponse = [
  "What did you say? I didn't catch that...actually it doesn't matter, I don't care anyways...just kidding!",
  "Hey, you in the comment...you are pretty talktive today. Good job! Keep up with that."];
let NegativeResponse = [
  "Oh, I see...that's pretty sad, I guess? Well...emmm...let's talk about something else!",
  "Hmm...If you had a bad day...I can give you my positive energy!...If I have any."];
// holds the texts currently displayed on the screern
let MeroCurrentLine = "";

// character images
let currentMeroImg; // leave the original image empty and put images in depending on different conditions
let mero1, mero2, mero3, mero4; // stage 1 four images
let meroP, meroN, meroNg; // stage 2 Positive, Neutral, NeGative responses images
let meroR1, meroR2, meroR3, meroR4, meroR5, meroR6, meroR7, meroR8, meroR9, meroR10; // stage 2 random talk images (R = random)

// set up empty arrays to keep chat and images align by index
let Stage1Imgs = [];
let Stage2Texts = [];
let Stage2Imgs = [];
let PositiveTexts = [];
let PositiveImgs = [];
let NeutralTexts = [];
let NeutralImgs = [];
let NegativeTexts = [];
let NegativeImgs = [];



// ===== preload =====
function preload() {
  // load different backgrounds for different stages
  background0 = loadImage('Imgs/Bedroom Overview.png'); // stage 0 background
  background12 = loadImage('Imgs/StreamingBackground.png'); // stage 1 and 2 background

  // load different character images for different dialogue
  // stage 1 images
  mero1 = loadImage('Imgs/1.png'); // greeting
  mero2 = loadImage('Imgs/2.png'); // when the user's stage 1 chat is positive
  mero3 = loadImage('Imgs/3.png'); // when the user's stage 1 chat is neutral
  mero4 = loadImage('Imgs/4.png'); // when the user's stage 1 chat is negative
  // stage 2 images: response
  meroP = loadImage('Imgs/P.png'); // when the user's stage 2 chat is positive
  meroN = loadImage('Imgs/N.png'); // when the user's stage 2 chat is neutral
  meroNg = loadImage('Imgs/Ng.png'); // when the user's stage 2 chat is negative
  // stage 2 images: random
  meroR1 = loadImage('Imgs/R1.png'); // these are random dialogues when the user clicks the right button to go to the next frame on stage 2
  meroR2 = loadImage('Imgs/R2.png');
  meroR3 = loadImage('Imgs/R3.png');
  meroR4 = loadImage('Imgs/R4.png');
  meroR5 = loadImage('Imgs/R5.png');
  meroR6 = loadImage('Imgs/R6.png');
  meroR7 = loadImage('Imgs/R7.png');
  meroR8 = loadImage('Imgs/R8.png');
  meroR9 = loadImage('Imgs/R9.png');
  meroR10 = loadImage('Imgs/R10.png');

  // stage 1 images: greeting, positive response, neutral response, negative response
  Stage1Imgs = [mero1, mero2, mero3, mero4];
  // stage 2 random chats and images, which are aligned by index to match each other
  Stage2Texts = [MeroChats[0], MeroChats[1], MeroChats[2], MeroChats[3], MeroChats[4], MeroChats[5], MeroChats[6], MeroChats[7], MeroChats[8], MeroChats[9]];
  Stage2Imgs = [meroR1, meroR2, meroR3, meroR4, meroR5, meroR6, meroR7, meroR8, meroR9, meroR10];
  // stage 2 response chats and images depending on user's input sentiment, also aligned by index 
  PositiveTexts = [PositiveResponse[0], PositiveResponse[1]];
  PositiveImgs = [meroP, meroP]; // there are two chats that share the same image for each kind of response here
  NeutralTexts = [NeutralResponse[0], NeutralResponse[1]];
  NeutralImgs = [meroN, meroN];
  NegativeTexts = [NegativeResponse[0], NegativeResponse[1]];
  NegativeImgs = [meroNg, meroNg];
 

  // Initialize the sentiment analysis model (ml5.sentiment)
  // this is from https://docs.ml5js.org/#/reference/sentiment
  sentiment = ml5.sentiment("MovieReviews");
}



// ===== set up =====
function setup() {
  createCanvas(windowWidth, windowHeight); // create canvas
  // make the text automatically go to the next line when hitting the edge of the screen
  // this is from https://p5js.org/reference/p5/textWrap/
  textWrap(CHAR); 
  // let this function run so that the canvas only show the UI that are supposed to appear on stage 0
  buildStage0UI(); 
}



// ===== draw =====
function draw() {
  background(20);
  fill(255); // set a background color

  // set up things that are supposed to happen on different stages
  if (stage === 0) {
    // let the image fill in the whole page so that it serves as the background
    // let the background for stage 0 appear first so that it is on the lowerest layer
    image(background0, 0, 0, width, height);     
    // the title line of the game
    textAlign(CENTER);
    textSize(28);
    text("[Mero] is Live. Come Hang out!", windowWidth / 2, windowHeight / 2 - 120); 
    // the text below the title line that tells the user to put in their username
    textSize(18);
    text("Enter your username", windowWidth / 2, windowHeight / 2 - 20); 
  } 
  else if (stage === 1) {
    // do the same for background images for stage 1
    image(background12, 0, 0, width, height);
    // if the current character image exists, draw it out
    // let the character image also fill the whole page (these images are PNGs with transparent backgrounds, so that the background also shows)
    if (currentMeroImg) {
      image(currentMeroImg, 0, 0, width, height);
    }
    // show the user's chat on the page
    textAlign(LEFT);
    textSize(15);
    noStroke();
    // show the user name stored eariler when the user input their username on stage 0 
    // then show the chat they put in inside the text box
    text("[" + savedUsername + "] " + analyzedChat, windowWidth * 0.8, 30, windowWidth * 0.15); 
    // show Mero's response based on the sentiment level of user inputs
    textAlign(CENTER);
    textSize(18);
    stroke('black');
    strokeWeight(2);
    fill('white');
    text(MeroResponse, windowWidth * 0.1, windowHeight * 0.6, windowWidth * 0.8); 
  } 
  else if (stage === 2) {
    // do the same for background images for stage 2
    image(background12, 0, 0, width, height);
    // do the same for character images for stage 2
    if (currentMeroImg) {
      image(currentMeroImg, 0, 0, width, height);
    }
    // show the user's chat on the page
    textAlign(LEFT);
    textSize(15);
    noStroke();
    // show the user name stored eariler when the user write their username on stage 0 
    // then show the chat they put in inside the text box
    text("[" + savedUsername + "] " + analyzedChat, windowWidth * 0.8, 30, windowWidth * 0.15); 
    // show Mero's response or randomized chat
    textAlign(CENTER);
    textSize(18);
    stroke('black');
    strokeWeight(2);
    fill('white');
    text(MeroCurrentLine, windowWidth * 0.1, windowHeight * 0.5, windowWidth * 0.8); 
}
}


// ===== other functions =====
// create stage 0 UI
function buildStage0UI() {
  NameInput = createInput(); // create the input box for users to put in their username. I got this from https://p5js.org/reference/p5/createInput/
  NameInput.position(windowWidth / 2 - NameInput.width*2/3, windowHeight / 2); // position the input box 
  ConfirmBtn = createButton("Confirm"); // create the button to let users submit their user name. I got this from https://p5js.org/reference/p5/createButton/
  ConfirmBtn.position(windowWidth / 2 + NameInput.width/3, windowHeight / 2); // position the button
  ConfirmBtn.mousePressed(saveName); // when button is pressed, the saveName function runs and saves the username for later use
}
// remove stage 0 UI before going to stage 1
function destroyStage0UI() {
  if (NameInput) {
    NameInput.remove(); // if the NameInput UI exists here, remove it
  }
  if (ConfirmBtn) {
    ConfirmBtn.remove(); // if the ConfirmBtn UI exists here, remove it
  }
}

// save the inputed username on stage 0 to be used in further stages
function saveName() {
  savedUsername = NameInput.value(); // save the value of the inputed username from the input box for later use
  stage = 1; // after username is saved, the stage goes to stage 1
  //remove the UI from stage 0 and built the UI from stage 1
  destroyStage0UI();
  buildStage1UI();
  // the first dialogue of the character at the beginning of stage 1 auto appears
  MeroResponse = "Hi~~~Welcome to my stream!! This is Mero-chan. How's everyone doing?";
  // first image for stage 1 (greeting) auto appears
  currentMeroImg = Stage1Imgs[0]; 
}

// create stage 1 UI
function buildStage1UI() {
  // resize canvas so that there can be a chatbox below it
  resizeCanvas(windowWidth, windowHeight * 0.75);
  inputBox = createInput("Send Chat..."); // create the input box for users to send chat like how they would while watching a stream
  sendBtn = createButton("Send"); // create the button to let users send the chat
  sendBtn.mousePressed(analyzeAndDisplay); // when button is pressed, the analyzeAndDisplay function runs and determines the sentiment of user input while displaying it on to the screen
}


// start this function and both output the text on to the screen and start the prediction
function analyzeAndDisplay() {
  analyzedChat = inputBox.value(); // get the inputed text
  getSentiment(); // run the ML5 sentiment function
}

// I got this from https://editor.p5js.org/ml5/sketches/hopIvsCGL
function getSentiment() {
  // Use the value of the input box
  let text = inputBox.value();
  // Start making the prediction (determine the positivity value of the inputed text)
  sentiment.predict(text, gotResult);
}

// I got this from https://editor.p5js.org/ml5/sketches/hopIvsCGL
function gotResult(prediction) {
  let confidence = prediction.confidence;
  if (confidence > 0.7) { // meaning the user's input is positive
    if (stage === 1) {
      // let the character response according to the sentiment level of the input: positive response for stage 1
      MeroResponse = "Doing good? Good for you~~~I am doing good, too. ";
      // positive image for stage 1 
      currentMeroImg = Stage1Imgs[1];
    } else if (stage === 2) {
      // pick a random response from the positive responses and its aligned image: positive response&image for stage 2
      const i = floor(random(PositiveTexts.length)); // pick a random index
      MeroResponse = PositiveTexts[i]; // get the response text according to the index
      MeroCurrentLine = PositiveTexts[i]; // let the text be displayed to the screen
      currentMeroImg = PositiveImgs[i]; // get the aligned image according to the index
    }
  } else if (confidence > 0.4) { // meaning the user's input is neutral
    if (stage === 1) {
      // neutral response for stage 1
      MeroResponse = "Just okay? Well...you survived another day, so that's good news. ";
      // neutral image for stage 1 
      currentMeroImg = Stage1Imgs[2];
    } else if (stage ===2) {
      // neutral response&image for stage 2
      const i = floor(random(NeutralTexts.length)); // pick a random index
      MeroResponse = NeutralTexts[i]; // get the response text according to the index
      MeroCurrentLine = NeutralTexts[i]; // let the text be displayed to the screen
      currentMeroImg = NeutralImgs[i]; // get the aligned image according to the index
    }
  } else { // meaning the user's input is negative
    if (stage === 1) {
      // negative response for stage 1
      MeroResponse = "Oh, wow, that's so bad......Well, at least everything is going well with me~~";
      //  negative image for stage 1 
      currentMeroImg = Stage1Imgs[3];
    } else if (stage === 2 ) {
      // negative response&image for stage 2
      const i = floor(random(NegativeTexts.length)); // pick a random index
      MeroResponse = NegativeTexts[i]; // get the response text according to the index
      MeroCurrentLine = NegativeTexts[i]; // let the text be displayed to the screen
      currentMeroImg = NegativeImgs[i]; // get the aligned image according to the index
    }
  }
}


// make thing happen when user press some keys
function keyPressed() {
  // Start the desinated functions for each stage when the Enter key is pressed
  // this is used when user input texts and use the Enter key for "sending the text"
  if (keyCode === ENTER) {
    if (stage === 0) {
      saveName(); // save username for later displaying them on the screen
    } else {
      analyzeAndDisplay(); // analyze the sentiment of user's chat to decide Mero's response
    }
  }

  // this is used when user needs to let the character speaks a random line
  if (keyCode === RIGHT_ARROW) {
    if (stage === 1) {
      // on stage 1, when the right arrow key is pressed, the stage goes to stage 2
      stage = 2;
      nextFrame();
    } else {
      // go to the next frame (new chat and new img) when the right arrow key is pressed on stage 2
      nextFrame();
    }
  }
}

// on stage 2, goes to the next frame means to get a new random chat and its aligned image
function nextFrame() {
  const i = floor(random(Stage2Texts.length)); // pick a random index
  MeroRandomChat = Stage2Texts[i]; // get the chat text according to the index
  MeroCurrentLine = Stage2Texts[i]; // let the text be displayed to the screen
  currentMeroImg = Stage2Imgs[i]; // get the aligned image according to the index
}

