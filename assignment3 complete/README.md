## Assignment 3: Abstract Clock

For this project, I used statistic graphs to represent time. I drew a line graph representing different digits of year, a bar graph with each bar representing month, day,  and hour, and two pie charts each representing minutes and seconds. 

I positioned the four graphs into the four corners of the screen and used push() and pop() to seperate the code for each of them for better organization.

I added a big title for the page showing the name of the abstract clock, a seperate color for each area of the four graphs, and a small title under each graph, indicating what unit of time this graph represents. 

For the year graph and month/day/hour graph, which are the two graphs that require a x and y axis, I used for loop to make sure the numbers on the y axis stay are the same distance from each other, and I used map() to make sure the dots for the line of the year graph and the height of the bars for the month/day/hour graph are porpotionate to the y axis values. 

Getting each digit of the year is the most challenging part of this assignment. For the thousand's place, I divided the year() value by 1000, and I found int() function in https://p5js.org/reference/, which helped me convert the number after division to integer. Then, I decided to get the hundred's place, ten's place, and one's place by substracting the previous value and then convert them into integers. Then, I mapped these integers relative to the y axis.

For each of the minutes graph and seconds graph, which are the two pie charts, I drew an arc above a circle background to make it look like a pie chart, and set the stop position of the arc relative to minute() or second(), converted them into radians using the function we learned in class, and substract it by half pi to set the starting point to the top of the circle, where the number 12 lays on an actual clock. 

