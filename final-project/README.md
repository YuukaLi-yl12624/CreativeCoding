# Final Project: Mero is Live

This project is a visual-novel game. The game is about looking at a streamer girl, Mero, doing streaming through her computer camera. As her audience, you want to learn more about Mero. While interacting with her while she is streaming, more contexts will be slowly unlocked. 



I used ml5.js Sentiment model to get the predicted positivity level of user's inputs. It runs in stages: stage 0 collects the username, stage 1 greets and responds with a matching character image based on the first sentiment, and stage 2 continues with both sentiment-driven replies and right-arrow-triggered random scripts. Text and images are kept in sync via parallel arrays (stage 1 greet/positive/neutral/negative; stage 2 random lines; stage 2 positive/neutral/negative response pools). Enter submits the username or chat; Right Arrow advances to or through stage 2. Inputs/buttons are created with p5 DOM. Backgrounds and character images are drawn with aspect-ratio-preserving scaling and centered placement, and `textWrap` keeps text readable as the window resizes.



## Game Plot

### Start
**Mero in the top left corner of the screen and UI at the bottom right**
**Mero says hi to the audience and says streaming starts**
Hi~Welcome to my stream!! This is Mero-chan. 
How's everyone doing?
**if user inputs, the text will be displayed at the right of the screen (user's ID: UserCC2025)**
**Language model detects user's input and responds back**
Good? Good for you~I am doing great, too. 
Just okay? Well...you survived another day, so it's good news. 
Oh no...that's so bad. Well, I'm glad everything is going great with me~

You know, recently I have been...emmm...play games, like usual. 
**Mero talks randomly about her life (scripts randomly outputed)**
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