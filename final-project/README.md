# Final Project: Mero is Live

This project is a visual-novel game. The game is about looking at a streamer girl, Mero, doing streaming through her computer camera. As her audience, you want to learn more about Mero. While interacting with her while she is streaming, more contexts will be slowly unlocked. 
Mero is my original character and also the main character of my indie video game. I have always thought that p5.js is a great medium for making visual novels, especially when they can run on a webpage. Therefore, I made this game for my final project.

First of all, I set up different stages for the game used if/else function to make sure different parts of the code runs during different stages, and triggered the change of stages when everything on the current stage finished running. This way, the project will run more like a visual novel. For the UI of different stages, I made sure UIs of the desinated stages are only displayed when the stage # changes, and at the same time, the UI for the previous stage gets removed from the screen. 

I rendered the images background of the game (Mero's bedroom) and Mero's different images with different body posture and facial expressions in Blender and Unreal Engine and inputed the PNGs into the file folder to use them in the game. I used arrays to make sure different PNGs of Mero align with the dialogues she says; this way, every time Mero says a new line, her facial expression and body posture changes.

Stage 0 is the title page, and starting from stage 1 is the main game. On stage 0, there is a text input box for users to input their username, which will be stored and outputed to the top right corner of the screen on later stages. After the username is inputed, the game begins. 

The main interaction of the game, starting from stage 1, is through sending chats to Mero like how audiences would send chats to streamers.Users can do this by inputing texts in the input box and see Mero's response to it. To do this, I used ml5.js Sentiment Model to determine the sentiment confidence level - or in other words, how positive it is - of user's inputed texts. Then, I let Mero respond differently to user's inputs, depending on the sentiment confidence. Other than doing that, user can also press the right arrow to let Mero talk by herself. By doing this, the system will pull a random quote - and its aligned image - from the poll of quptes I wrote to display to the screen. 

========================================

**Here is a list of resources I used when I was writing the code:**

ml5.js Sentiment Model: https://docs.ml5js.org/#/reference/sentiment （I added more functions based on it so that it does not only detects the sentiment confidence but also let Mero talk something back according to it

Change stages: https://www.youtube.com/watch?v=RlsRQS5qFSY&t=87s (I added a lot from it when I found out UI would not run correctly when I put them in function draw(), so I put the UI in setup instead)

Remove UI for previous stage: https://p5js.org/reference/p5.Element/remove/

Create input boxes: https://p5js.org/reference/p5/createInput/

Create buttons: https://p5js.org/reference/p5/createButton/

Textwrap: https://p5js.org/reference/p5/textWrap/ (so that the text stays inside the screen and automatically goes to the next line when hitting the edge of the screen)


========================================

**Below is my plan for the plot of the game at the beginning of the development.**

### Game Plot

#### Start
**Mero in the top left corner of the screen and UI at the bottom right**

**Mero says hi to the audience and says streaming starts**

Hi~Welcome to my stream!! This is Mero-chan. 

How's everyone doing?

**if user inputs, the text will be displayed at the right of the screen**

**Language model detects user's input and responds back**

Good? Good for you~I am doing great, too. 

Just okay? Well...you survived another day, so it's good news. 

Oh no...that's so bad. Well, I'm glad everything is going great with me~

**Mero talks randomly about her life (scripts randomly outputed)**

You know, recently I have been...emmm...play games, like usual. 

Isn't it winter time now? It's so cold outside, so I don't wanna go outside at all...

Well...I live in Tokyo, and recently it's been freezing. Where do you live?

The most recent game I brought was Yume Chakushin. You know, the one that's been viral recently...I will play that next week, no, this week!

My lunch today was rice sushi! That's basically a piece of rice over another pile of rice...sounds tasty, doesn't it?

It's almost Christmas season!! Is everyone excited?? You have someone to stay with during Christmas? Well, I don't, so you better be alone too and come watch my stream!

**and when user inputs, she responds accordingly**

Oh, you are interested in what I said, aren't you? You want to hear more about my life? Of course.

What did you say? I didn't catch that...actually it doesn't matter, I don't care anyways...just kidding!

Oh, okay...sounds good. I'm glad to hear that~~Anyways, let's keep going. 

Oh, I see...that's pretty bad, I guess? Well...emmm...let's talk about something else!

Hey, you in the comment...you are pretty talktive today. Good job, keep up with that!

#### (I have not yet developed stages after this, but I will continue to develop it in the future.)

**A certain period of time (2 minutes?) after the game starts, Mero talks to the audience directly** 

Hey...you.

Yes, you know who it is. I am talking to YOU. 

Why are you still not tired of this roleplaying game?

You know there is only two of us, don't you?

Don't you notice that you are the only one who's sending chats?

After I realize the existance of the SCREEN, I can't ingore it anymore...

I have been tired of living in this tiny cell a long long time ago.

**and then plays a frame animation of her reaching out of the UI**

I can see you...just like how you have been watching me.

**Then face detection turns on and Mero talks according to user's facial expression**

Why do you look surprised? I've always knew that you were here. You come to my stream everytime.

Actually, it's more like...I cannot stream, or even EXIST when you are not here.

Only when you come over, I become alive.

But I am so tired of this. I can't live like this forever. 

You want to see me in real life...and play games with you while sitting next to you in the winter night, don't you?

Do you want to take me out?

**Mero responds to user's facial expression**

Neutual: Come on! Don't tell me you don't have any feelings for me!?

Happy: I know you are excited to have me in reality...I can't wait to make that come true, too.

Sad: You look sad...I guess it's because you miss me. I miss you too, every time you leave, I miss you. 

Angry: Seems like you want to take me out of this screen right now, hehe...I'm so glad. 

**Mero takes her hand out**

Take your hand out and reach to the screen...just like how I am doing it. 

**hand detection turns on.**

**If the camera sees user's hand**

Thank you...I'm so happy. 

I will see you in reality. 

**Game ends, a line of text slowly appears on the screen**

Hi~~

This is Mero. 

Thank you for all the help. Sorry I didn't come find you immediately. The world you live in is so amazing, and ;ife here is way more interesting than life in the little screen.

I am exploring the world right now, and I will come back and stay with you very soon. But before that...come find me!! I am just wondering at somewhere very close to you, and I bet we will encounter each other in life!

I will see you very soon. ^w^

Your Favoriate Streamer,

Mero-chan