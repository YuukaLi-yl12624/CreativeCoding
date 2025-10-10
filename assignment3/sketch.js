function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //line graph that represent the year
  //draw the base shape
  line(50, 115, 50, 350);
  line(40, 130, 50, 115);
  line(60, 130, 50, 115);
  line(50, 350, 300, 350);
  line(285, 340, 300, 350);
  line(285, 360, 300, 350);

  //write the numbers on the y axis
  text("0", 50 - 10, 125 + 225);
  text("9", 50 - 10, 125 + 22.5);
  text("8", 50 - 10, 125 + 22.5 * 2);
  text("7", 50 - 10, 125 + 22.5 * 3);
  text("6", 50 - 10, 125 + 22.5 * 4);
  text("5", 50 - 10, 125 + 22.5 * 5);
  text("4", 50 - 10, 125 + 22.5 * 6);
  text("3", 50 - 10, 125 + 22.5 * 7);
  text("2", 50 - 10, 125 + 22.5 * 8);
  text("1", 50 - 10, 125 + 22.5 * 9);

  //write different digits of the year on the x axis
  text("Thousands", 50 + 10, 350 + 10);
  text("Hundreds", 50 + 80, 350 + 10);
  text("Tens", 50 + 150, 350 + 10);
  text("Ones", 50 + 195, 350 + 10);

  push(); //do a transformation only for the color of the line chart's line
  fill("#ce5f68ff");
  stroke("#ce5f68ff");
  circle(88, 300, 5);
  circle(155, 350, 5);
  circle(210, 300, 5);
  circle(260, 235, 5);

  //draw the four dots for the four digits of this year 2025, accordingly
  noFill();
  beginShape();
  vertex(88, 300);
  vertex(155, 350);
  vertex(210, 300);
  vertex(260, 235);
  endShape();
  //draw the line that connects the dots
  pop();

  push();
  translate(width / 2, 0);
  //reposition the (0,0) to only draw in the right half of the screen
  //to make sure the graph at the top right stays in place relative to the screen

  //bar chart that represent month, day, and minutes
  //draw draw base shape
  line(50, 115, 50, 350);
  line(40, 130, 50, 115);
  line(60, 130, 50, 115);
  line(50, 350, 300, 350);
  line(285, 340, 300, 350);
  line(285, 360, 300, 350);

  //write the numbers on the y axis
  text("0", 50 - 10, 125 + 225);
  text("31", 50 - 15, 125 + 30);
  text("25", 50 - 15, 125 + 32 * 2);
  text("20", 50 - 15, 125 + 32 * 3);
  text("15", 50 - 15, 125 + 32 * 4);
  text("10", 50 - 15, 125 + 32 * 5);
  text("5", 50 - 10, 125 + 32 * 6);

  //write month, day, and hour on the x axis
  text("Month", 50 + 25, 350 + 10);
  text("Day", 50 + 100, 350 + 10);
  text("Hour", 50 + 170, 350 + 10);

  noStroke();
  //draw the four corner of the "month bar" of this month: October, aka 10;
  fill("#84cf6bff");
  beginShape();
  vertex(75, 349);
  vertex(75, 282); //top left corner of the bar, which should be changed to month() function later;
  vertex(110, 282); //top right corner of the bar, which should be changed to month() function later;
  vertex(110, 349);
  endShape();

  //draw the four corner of the "day bar" of today: 8th;
  fill("#5bb5c3ff");
  beginShape();
  vertex(145, 349);
  vertex(145, 297); //top left corner of the bar, which should be changed to day() function later;
  vertex(180, 297); //top right corner of the bar, which should be changed to day() function later;
  vertex(180, 349);
  endShape();

  //draw the four corner of the "hour bar" of this hour: 20:xx PM;
  fill("#f2cd67ff");
  beginShape();
  vertex(215, 349);
  vertex(215, 215); //top left corner of the bar, which should be changed to hour() function later;
  vertex(250, 215); //top right corner of the bar, which should be changed to hour() function later;
  vertex(250, 349);
  endShape();

  pop();

  push();
  translate(0, height / 2);
  //reposition the (0,0) to only draw in the bottom half of the screen
  //to make sure the graph at the bottom left stays in place relative to the screen

  //pie chart that represent minutes
  noStroke();
  fill("#e2d0edff");
  circle(150, 200, 200);
  fill("#a66eade0");
  arc(150, 200, 200, 200, radians(-90), radians(mouseX / 60), PIE);

  pop();


  push();
  translate(width / 2, height / 2);
  //reposition the (0,0) to only draw in the bottom right of the screen
  //to make sure the graph at the bottom right stays in place relative to the screen

  //pie chart that represent minutes
  noStroke();
  fill("#fdebcbff");
  circle(150, 200, 200);
  fill("#eea15eeb");
  arc(150, 200, 200, 200, radians(-90), radians(mouseX), PIE);

  pop();
}
