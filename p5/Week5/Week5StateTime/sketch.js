var myState = 0;
var myTimer = 0;
var myBackground;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background('white');
  myBackground = color(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(myBackground);
      text("case 0", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 1;
        //    background(random(255), random(255), random(255));
        myBackground = color(random(255), random(255), random(255));
      }
      break;

    case 1:
      background(myBackground);
      text("case 1", 100, 100);
      myTimer++;

      if (myTimer >= 200) {
        myTimer = 0;
        myState = 2;
        //      background(random(255), random(255), random(255));
        myBackground = color(random(255), random(255), random(255));
      }
      break;

    case 2:
      background(myBackground);
      text("case 2", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 0;
        //  background(random(255), random(255), random(255));
        myBackground = color(random(255), random(255), random(255));
      }
      break;

  }

}
