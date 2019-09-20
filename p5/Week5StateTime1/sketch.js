var myState = 0;
var myTimer = 0;
var myBColor;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myBColor = color(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background(myBColor);
      text("case 0", 100, 100);

      myTimer++;
      if (myTimer >= 200) { // the timer ran out!!!
        myState = 1;
        myTimer = 0;
        myBColor = color(random(255), random(255), random(255));
      }
      break;

    case 1:
      background(myBColor);
      text("case 1", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState = 2;
        myTimer = 0;
        myBColor = color(random(255), random(255), random(255));

      }
      break;

    case 2:
      background(myBColor);
      text("case 2", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState = 0;
        myTimer = 0;
        myBColor = color(random(255), random(255), random(255));

      }
      break;

  }

}
