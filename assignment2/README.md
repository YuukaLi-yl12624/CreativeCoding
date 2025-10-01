# Assignment 2

---

---

# Generative Pattern Assignment

I chose to make a raindrop effect for this assignment.

I made the raindop smaller as they get closer to the bottom of the page using for loops and map: every time the y axis goes down, the spacing and scale of raindrops become smaller. 

I also added an animation that when the user clicks their mouses, the raindrops all drop down the screen using yTransform and if function: if the mouse is pressed, yTransform will keep getting bigger and make the y axis of raindrops keep going down. I set yTransform back to 0 when mouse is released or when all the raindrops reach the bottom of the page (yTransform >= height) so that the raindrops go back to the original places. 

After that, I gave the stroke of the raindop a random color every time the page refreshes using random colors. Then, I realized that if I put it in the draw {}function, the color will keep changing, which makes it to flash very quick, and if I use noLoop(), the raindrop dropping effect will also go away. Therefore, I set up a strokeHasColor function and an if/else function to make sure the random color will only be assigned to the strokes when strokeHasColor == false, and after that strokeHasColor will become true, and the color assignment stops. I set the strokeHasColor back to false when all raindrops drop to the bottom of the page (yTransform >= height) so that a new random color can be assigned to the strokes when yTransform refreshes. 
