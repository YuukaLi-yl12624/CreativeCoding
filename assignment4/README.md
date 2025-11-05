
# Assignment 4: Object Factory

For this project, I made a face generator that generates different skin colors, eye colors, hair colors, hair style and beards that are randomly selected from data stored in arrays. 

I made the face appear every time the mouse is pressed, at the mouse's position using face.push() to store new faces in an empty faces array and use display() to display all of the stored ones to the screen.

Each for skin, eye, and hair for each face, I stored several colors in the array accordingly. I used random() to randomly select one color each, every time the mouth is pressed. I also stored two differnt lengths in an array for the hair, and I used random() to select different length for each face's hair. I also used another random() to generate a number between 0 to 1, and draw beards for faces with number less than 0.5. 

I added a feature that when the mouse is hovering over the face, the mouth opens. I did this by measuring the distance between the face and mouse using dist(), and if the distance is less than the radius of the face, I draw an opened mouth. Other wise, I draw a cloesd mouth.

In function mousePressed(), I also added a feature that when the mouse is hovering over a face while pressing, that face will disappear while the mouse generate another face. I did this u using splice(). Sometimes when the mouse is hovering over two faces at the same time, they will disappear together and become a new face. This happens when the mouse curser is laying over both faces.

Spend some time to play with it. I hope you have fun!