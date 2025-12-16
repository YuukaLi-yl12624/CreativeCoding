// ===================code for tracking facial movement and create input box and button================

// function setup() {
//   createCanvas(windowWidth, windowHeight);
  
// }

// function draw() {
//   background(0);
//   fill(255);
//   text(window.theExpression,100,100);
//   console.log(window.theExpression);
// }


// let myInput;
// let mTest;
// let button;
// function setup() {
//   mTest=false;
//   createCanvas(windowWidth, windowHeight);
//   myInput = createInput('Send chat...');
//   myInput.position(300, 300);
//   button = createButton('Send >');
//   button.position(450, 300);
//   describe('The text "hello!" written at the center of a gray square. A text box beneath the square also says "hello!". The text in the square changes when the user types something new in the input bar.');
// }

// function draw() {
//   background(0);
//   fill(255);
//   text(window.theExpression,100,100);
//   console.log(window.theExpression);
//   // Use the input to display a message.
//   let msg = myInput.value();
//     button.mousePressed(mTest_function);
//   if (mTest){
//   text(msg, 525, 55);
// }
// }

// function mTest_function(){
//   mTest=~mTest;
// }

// ================================code for Sentiment Analysis =====================================

// let sentiment;
// let submitBtn;
// let inputBox;
// let sentimentResult;

// function preload() {
//   // Initialize the sentiment analysis model
//   sentiment = ml5.sentiment("MovieReviews");
// }

// function setup() {
//   noCanvas();

//   // Setup the DOM elements
//   inputBox = createInput("Today is the happiest day and is full of rainbows!");
//   inputBox.attribute("size", "75");
//   submitBtn = createButton("submit");
//   sentimentResult = createP("Sentiment confidence:");

//   // Start predicting when the submit button is pressed
//   submitBtn.mousePressed(getSentiment);
// }

// function getSentiment() {
//   // Use the value of the input box
//   let text = inputBox.value();

//   // Start making the prediction
//   sentiment.predict(text, gotResult);
// }

// function gotResult(prediction) {
//   // Display sentiment result via the DOM
//   sentimentResult.html("Sentiment confidence: " + prediction.confidence);
// }

// // Start predicting when the Enter key is pressed
// function keyPressed() {
//   if (keyCode == ENTER) {
//     getSentiment();
//   }
// }


// ================================before connecting stages =====================================

// // ----- Stage 0 -----
// let NameInput;
// let savedUsername = "User";
// let Stage0 = true;  
// let Stage1 = false; 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   NameInput = createInput();
//   NameInput.position(windowWidth/2-NameInput.width/2, windowHeight/2);
//   ConfirmBtn = createButton("Confirm");
//   ConfirmBtn.position(windowWidth/2+NameInput.width/2, windowHeight/2);
//   ConfirmBtn.mousePressed(saveName);
// }

// function draw() {
//   fill("White");
//   text("My Username", windowWidth/2-NameInput.width, windowHeight/2+NameInput.height/1.5);
// }

// function saveName () {
//   savedUsername = NameInput.value();
//   Stage0 = false;
//   Stage1 = true;
// }

// // ----- Stage 1 -----
// // ML5 Sentiment Variables
// let sentiment;
// let sendBtn;
// let inputBox;
// let sentimentResult;

// // P5.js Display Variables
// // This variable holds the text that was LAST submitted and is displayed on the Canvas.
// // Initialized as an empty string now, so nothing appears until the first submit.
// let analyzedChat = ""; // the string is empty at the beginning
// // State Variable to track if a chat was ever sent
// let ChatSent = false;
// let MeroResponse = "";

// // PRELOAD
// function preload() {
//   // Initialize the sentiment analysis model (ml5.sentiment)
//   sentiment = ml5.sentiment("MovieReviews");
// }

// // SETUP
// function setup() {
//   // Create Canvas
//   createCanvas(windowWidth, windowHeight*2/3);

//   textWrap(CHAR); //make sure the text auto goes to the next line

//   // Setup the DOM elements (input box and send button)
//   inputBox = createInput("Send Chat...");
//   inputBox.attribute("size", "75");
//   sendBtn = createButton("Send");
//   sentimentResult = createP("Sentiment Confidence:");


//   // Start predicting when the submit button is pressed
//   sendBtn.mousePressed(analyzeAndDisplay);
  

// }

// // DRAW 
// function draw() {
//   background(20);
//   fill(255);


//   // Only output text on the screen when user has sent something
//   if (ChatSent) {
//     // Display the text stored in analyzedText after the user hits send
//     textAlign(LEFT);
//     textSize(15);
//     text("[" + savedUsername + "] " + analyzedChat, windowWidth*0.8, 30, windowWidth*0.15);
//     textAlign(CENTER);
//     textSize(18);
//     text(MeroResponse, windowWidth/2, windowHeight*0.5);
//     // Display the submitted text. This relies on analyzeAndDisplay updating analyzedText.
//   }
// }

// // FUNCTIONS
// // start this function and both output the text on to the screen and start the prediction
// function analyzeAndDisplay() {
//     // use the value of the input box
//     analyzedChat = inputBox.value();
//     // set the chatsent to true so that the text gets displayed on the screen
//     ChatSent = true;
//     // Start making the prediction
//     getSentiment();
// }

// function getSentiment() {
//   // Use the value of the input box
//   let text = inputBox.value();
//   // Start making the prediction
//   sentiment.predict(text, gotResult);
// }

// function gotResult(prediction) {
//   // Display sentiment result via the DOM
//   sentimentResult.html("Sentiment confidence: " + prediction.confidence);
//   // let the character respond to user's chat according to its sentiment confidence
//   let confidence = prediction.confidence;
//   if (confidence > 0.7) { // positive
//     MeroResponse = "Going well? Good for you~~I am doing good, too. ";
//   } else if (confidence > 0.4) { // neutral
//     MeroResponse = "Just okay? Well...you survived another day, so that's good news. ";
//   } else { // negative
//     MeroResponse = "Oh, wow, that's so bad......Well, I'm glad everything is going well with me~~";
//   }
// }

// // Start analyzing and display when the Enter key is pressed
// function keyPressed() {
//   if (keyCode === ENTER) {
//     analyzeAndDisplay();
//   }
// }









// // ----- Stage 0 elements -----
// let stage = 0; // 0 = enter username, 1 = greeting chat
// let background0;
// let NameInput;
// let ConfirmBtn;
// let savedUsername = "";

// // ----- Stage 1 elements -----
// // ML5 Sentiment Variables
// let background12;
// let sentiment;
// let sendBtn;
// let inputBox;
// let sentimentResult;
// // P5.js Display Variables
// let analyzedChat = ""; // This holds the text that was last sent and is displayed on the Canvas.
// let ChatSent = false; // use this to track if a chat was ever sent
// // Initialized as an empty string now, so nothing appears until the first chat is sent
// let MeroResponse = "";

// // ----- Stage 2 elements -----
// let MeroChats = ["Recently I have been...emmm...playing games, like usual. ","Isn't it winter time now? It's so cold outside, so I don't wanna go out at all...!", "Well...I live in Tokyo, and recently it's been freezing. Where do you live?", "The most recent game I brought was Yume Chakushin. You know, the one that's been viral recently...I will play that next week, no, this week!", "My lunch today was rice sushi. That's basically rice over another pile of rice...sounds tasty, doesn't it?", "It's almost Christmas season!! Is everyone excited?? You have someone to stay with during Christmas? Well, I don't, so you better be alone too and come watch my stream!", "Is there a game you want me to play? Send them in the chat! Although I might not listen..hehe.","You want to see my room? I-I mean...It's too messy to show, so not right now!", "Why am I not at school at this time? I don't go to school anymore!", "Why do I wear my school uniform? Because this is my only nice cloth...Wait, I'm joking! I'm joking!"];
// let MeroRandomChat = "";
// let PositiveResponse = ["Oh, you are interested in what I said, aren't you? You want to hear more about my life? Of course.", "Oh, okay...sounds good. I'm glad to hear that...Anyways! let's keep going. "];
// let NeutralResponse = ["What did888 you say? I didn't catch that...actually it doesn't matter, I don't care anyways...just kidding!", "Hey, you in the comment...you are pretty talktive today. Good job! keep up with that."];
// let NegativeResponse = ["Oh, I see...that's pretty sad, I guess? Well...emmm...let's talk about something else!", "Hmm...If you had a bad day...I can give you my positive energy!...If I have any."];
// let MeroCurrentLine = "";


// // PRELOAD
// function preload() {
  
//   background0 = loadImage('Imgs/Bedroom Overview.png'); 
//   background12 = loadImage('Imgs/StreamingBackground.png');               

//   mero1 = loadImage('Imgs/1.png');
//   mero2 = loadImage('Imgs/2.png');
//   mero3 = loadImage('Imgs/3.png');
//   mero4 = loadImage('Imgs/4.png');
//   meroP = loadImage('Imgs/P.png');
//   meroN = loadImage('Imgs/N.png');
//   meroNg = loadImage('Imgs/Ng.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');
//   meroR1 = loadImage('Imgs/R1.png');


//   // Initialize the sentiment analysis model (ml5.sentiment)
//   sentiment = ml5.sentiment("MovieReviews");
// }

// // SETUP
// function setup() {
//   createCanvas(windowWidth, windowHeight);
  

//   textWrap(CHAR); // ensure text wraps on long messages
//   buildStage0UI();
// }

// // DRAW 
// function draw() {
//   background(20);
//   fill(255);

//   if (stage === 0) {
//     // Stage 0
//     image(background0, 0, 0, width, height);
//     textAlign(CENTER);
//     textSize(28);
//     text("[Mero] is Live. Come Hang out!", windowWidth / 2, windowHeight / 2 - 120);
//     textSize(18);
//     text("Enter your username", windowWidth / 2, windowHeight / 2 - 20);
//   } // Stage 1
//     else if (stage === 1) {
//       image(background12, 0, 0, width, height);
//       textAlign(LEFT);
//       textSize(15);
//       text("[" + savedUsername + "] " + analyzedChat, windowWidth * 0.8, 30, windowWidth * 0.15);
//       textAlign(CENTER);
//       textSize(18);
//       text(MeroResponse, windowWidth * 0.1, windowHeight * 0.5, windowWidth * 0.8);
//     } // Stage 2
//     else if (stage === 2) {
//       image(background12, 0, 0, width, height);
//       textAlign(LEFT);
//       textSize(15);
//       text("[" + savedUsername + "] " + analyzedChat, windowWidth * 0.8, 30, windowWidth * 0.15);
//       textAlign(CENTER);
//       textSize(18);
//       text(MeroCurrentLine, windowWidth * 0.1, windowHeight * 0.5, windowWidth * 0.8);
//     } 
//   }


// // FUNCTIONS

// function buildStage0UI() {
//   NameInput = createInput(); //
//   NameInput.position(windowWidth / 2 - NameInput.width*2/3, windowHeight / 2);
//   ConfirmBtn = createButton("Confirm"); //
//   ConfirmBtn.position(windowWidth / 2 +NameInput.width/3, windowHeight / 2);
//   ConfirmBtn.mousePressed(saveName);
// }

// function destroyStage0UI() {
//   if (NameInput) NameInput.remove();
//   if (ConfirmBtn) ConfirmBtn.remove();
// }

// function saveName() {
//   savedUsername = NameInput.value();
//   stage = 1;
//   destroyStage0UI();
//   buildStage1UI();
//   MeroResponse = "Hi~~~Welcome to my stream!! This is Mero-chan. How's everyone doing?";

// }

// function buildStage1UI() {
//   // resize canvas for chat layout
//   resizeCanvas(windowWidth, windowHeight * 2 / 3);

//   // Setup the DOM elements (input box and send button)
//   inputBox = createInput("Send Chat...");
//   inputBox.attribute("size", "75");
//   //inputBox.position(windowWidth * 0.1, height + 20);
//   sendBtn = createButton("Send");
//   //sendBtn.position(windowWidth * 0.1 + inputBox.width, height + 20);
//   // sentimentResult = createP("Sentiment Confidence:");

//   sendBtn.mousePressed(analyzeAndDisplay);
// }


// // start this function and both output the text on to the screen and start the prediction
// function analyzeAndDisplay() {
//     // use the value of the input box
//     analyzedChat = inputBox.value();
//     // set the chatsent to true so that the text gets displayed on the screen
//     ChatSent = true;
//     // Start making the prediction
//     getSentiment();
// }

// function getSentiment() {
//   // Use the value of the input box
//   let text = inputBox.value();
//   // Start making the prediction
//   sentiment.predict(text, gotResult);
// }

// function gotResult(prediction) {
//   // Display sentiment result via the DOM
//   // sentimentResult.html("Sentiment confidence: " + prediction.confidence);
//   // let the character respond to user's chat according to its sentiment confidence
//   let confidence = prediction.confidence;
//   if (confidence > 0.7) { // positive
//     if (stage === 1) {
//     MeroResponse = "Doing good? Good for you~~I am doing good, too. ";
//     } else if (stage === 2) {
//       MeroResponse = random(PositiveResponse);
//       MeroCurrentLine = MeroResponse;
//     }
//   } else if (confidence > 0.4) { // neutral
//     if (stage === 1) {
//     MeroResponse = "Just okay? Well...you survived another day, so that's good news. ";
//     } else if (stage ===2) {
//       MeroResponse = random(NeutralResponse);
//       MeroCurrentLine = MeroResponse;
//     }
//   } else { // negative
//     if (stage === 1) {
//     MeroResponse = "Oh, wow, that's so bad......Well, at least everything is going well with me~~";
//   } else if (stage === 2 ) {
//     MeroResponse = random(NegativeResponse);
//     MeroCurrentLine = MeroResponse;
//   }
// }
// }

// // Start analyzing and display when the Enter key is pressed
// function keyPressed() {
//   if (keyCode === ENTER) {
//     if (stage === 0) {
//       saveName();
//     } else {
//       analyzeAndDisplay();
//     }
//   }
//   if (keyCode === RIGHT_ARROW) {
//     if (stage === 1) {
//       stage = 2;
//       nextFrame();
//     } else {
//       nextFrame();
//     }
//   }
// }

// function nextFrame() {
//   MeroRandomChat = random(MeroChats);
//   MeroCurrentLine = MeroRandomChat;
//   // MeroRandomImg = random(MeroImgs);
// }








