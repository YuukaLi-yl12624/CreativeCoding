function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //write a title for the clocks
  push();

  //set backgrounds to indicate different areas
  background("#000000ff");
  noStroke();
  fill("#f8f6fbff");
  rect(0,height/2, width/2,height); //bottom left background
  fill("#f9f6f2ff");
  rect(width/2,height/2,width,height); //bottom right background
  fill("#fbf9f9ff");
  rect(0,50, width/2,height/2-25); //top left background
  fill("#f2fdfbff");
  rect(width/2,50, width,height/2-25); //top right background

  textSize(20); //change text size
  //I got the textSize() code from https://p5js.org/reference/p5/textAscent/
  textAlign(CENTER, CENTER); //make the title centered
  //I got the textAlign() code from https://p5js.org/reference/p5/textAlign/
  text("The Statistic Clock", width/2, 25);

  pop();


//=============================================================================

  
  //start the line chart that represent the year

  push();

  //draw the base shape of the axis
  line(50, 115, 50, 350); //y axis
  line(40, 130, 50, 115);
  line(60, 130, 50, 115); //arrow
  line(50, 350, 300, 350); //x axis
  line(285, 340, 300, 350);
  line(285, 360, 300, 350); //arrow

  //write the numbers on the y axis
  for (let i = 0; i <= 9; i++) {
    //output each number from 0 to 9
    text(9 - i, 40, 145 + 22.5 * i);
  }
  //use a for loop to output the numbers on the y axis, from top to bottom, each minus by one

  //write the text for different digits of the year value on the x axis
  text("Thousands", 50 + 10, 350 + 12);
  text("Hundreds", 50 + 80, 350 + 12);
  text("Tens", 50 + 150, 350 + 12);
  text("Ones", 50 + 195, 350 + 12);


  //draw the line that represents the year
  push(); //do a transformation only for the color of the line chart's line

  //get the four digits of this year, accordingly
  let yearThousands = int(year()/1000); //2025/1000 = 2.025, int(2.025) = 2
  let yearHundreds = int((year()-yearThousands*1000)/100); //(2025-2*1000)/100 = 0.25, int(0.25) = 0
  let yearTens = int((year()-yearThousands*1000-yearHundreds*100)/10); //(2025-2*1000-0*100)/10 = 2.5, int(2.5) = 2
  let yearOnes = (year()-yearThousands*1000-yearHundreds*100-yearTens*10); //(2025-2*1000-0*100-2*10)=5
  //get the different digits of the year using math and convert them to integers
  //I got the int() function from https://p5js.org/reference/p5/int/

  let yThousands = map(yearThousands, 0, 9, 350, 140);
  let yHundreds = map(yearHundreds, 0, 9, 350, 140);
  let yTens = map(yearTens, 0, 9, 350, 140);
  let yOnes = map(yearOnes, 0, 9, 350, 140);
  //map the four digits to make them stay in porpotion of the graph;
  //and get the position for the four digits on the y axis

  //draw the four dots for the four digits
  fill("#ce5f68ff");
  stroke("#ce5f68ff");
  circle(88, yThousands, 5);
  circle(155, yHundreds, 5);
  circle(210, yTens, 5);
  circle(260, yOnes, 5);

  //draw the line that connects the dots
  noFill();
  beginShape();
  vertex(88, yThousands);
  vertex(155, yHundreds);
  vertex(210, yTens);
  vertex(260, yOnes);
  endShape();

  pop();

  //output a text to indicate this is the year chart
  textStyle(BOLD); //I got the textStyle() function from https://p5js.org/reference/p5/textStyle/
  textSize(14);
  text("Year", 150, 390);

  pop();


//=============================================================================

  //start the bar chart that represent the month, day, and hour
  
  push();

  translate(width / 2, 0);
  //reposition the (0,0) to only draw in the right half of the screen
  //to make sure the graph at the top right stays in place relative to the screen

  //draw draw base shape of the axis, same with the year chart
  line(50, 115, 50, 350); //y axis
  line(40, 130, 50, 115);
  line(60, 130, 50, 115); // arrow
  line(50, 350, 300, 350); //x axis
  line(285, 340, 300, 350);
  line(285, 360, 300, 350); // arrow

  //write the numbers on the y axis
  textAlign(RIGHT, CENTER);
  //make the numbers align to the left to stay close to the y axis
  for (let i = 0; i <= 25; i += 5) {
    //output the number from 0 to 30, each added by 5 (sorry for bad english)
    let yAxisValue = map(i, 0, 25, 185, 345);
    //spread out the numbers from 25 to 0 with the same distance from each other
    text(25 - i, 47, yAxisValue);
  }
  //use a for loop to output the numbers on the y axis, from top to bottom, from 25 to 0
  text("31", 47, 150);
  //output the number 31 seperately, as it cannot be divided by 5
  textAlign(LEFT, CENTER); //set the text align back to left


  noStroke();
  //draw the bar that represent the month
  fill("#84cf6bff");
  let yMonthBar = map(month(), 0, 12, 349, 265);
  //use a map function to make the month bar stay in the porpotion of the graph
  beginShape();
  vertex(75, 349);
  vertex(75, yMonthBar); //top left corner of the bar
  vertex(110, yMonthBar); //top right corner of the bar, these two digits determines the number value of this month
  vertex(110, 349);
  endShape();

  //draw the bar that represent the day
  fill("#5bb5c3ff");
  let yDayBar = map(day(), 0, 31, 349, 145);
  //use a map function to make the day bar stay in the porpotion of the graph
  beginShape();
  vertex(145, 349);
  vertex(145, yDayBar); //top left corner of the bar;
  vertex(180, yDayBar); //top right corner of the bar, these two digits determines the number value of today
  vertex(180, 349);
  endShape();

  //draw the bar that represent the hour
  fill("#f2cd67ff");
  let yHourBar = map(hour(), 0, 24, 349, 190);
  //use a map function to make the bar stay in the porpotion of the graph
  beginShape();
  vertex(215, 349);
  vertex(215, yHourBar); //top left corner of the bar;
  vertex(250, yHourBar); //top right corner of the bar, these two digits determines the number value of this hour
  vertex(250, 349);
  endShape();


  //write the text on the x axis to indicate month, day, and hour bars
  textStyle(BOLD);
  textSize(13);
  fill("#000000");
  text("Month", 50 + 25, 362);
  text("Day", 50 + 100, 362);
  text("Hour", 50 + 170, 362);

  pop();


//=============================================================================

  // start the pie chart that represent minutes

  push();
  
  translate(0, height / 2);
  //reposition the (0,0) to only draw in the bottom half of the screen
  //to make sure the graph at the bottom left stays in place relative to the screen

  //draw a circle as the chart background
  fill("#e2d0edff");
  circle(150, 200, 200);
  //draw the arc that becomes larger as the minutes amount goes higher
  noStroke();
  fill("#a66eade0");
  let minuteAngle = -HALF_PI + radians(minute() * (360 / 60));
  arc(150, 200, 199, 199, -HALF_PI, minuteAngle, PIE);
  //make the starting point at -HALF_PI(-90 degrees),
  //and the angree degree adds up as the minutes value goes higher and gets converted to radians
  
  //output a text to indicate this is the second chart
  textStyle(BOLD);
  textSize(14);
  fill("#000000");
  text("Minutes", 130, 325);
  
  pop();


//=============================================================================

  // start the pie chart that represent seconds
  push();

  translate(width / 2, height / 2);
  //reposition the (0,0) to only draw in the bottom right of the screen
  //to make sure the graph at the bottom right stays in place relative to the screen

  //draw a circle as the chart background
  fill("#f5e2c5ff");
  circle(150, 200, 200);
  //draw the arc that becomes larger as the seconds amount goes higher
  noStroke();
  fill("#eea15eeb");
  let secondAngle =  radians(second() * (360 / 60) - HALF_PI);
  arc(150, 200, 199, 199, -HALF_PI, secondAngle, PIE);
  //make the starting point at -HALF_PI(-90 degrees),
  //and the angree degree adds up as the seconds value goes higher and gets converted to radians
  
  //output a text to indicate this is the second chart
  textStyle(BOLD);
  textSize(14);
  fill("#000000");
  text("Seconds", 130, 325);

  pop();


}
