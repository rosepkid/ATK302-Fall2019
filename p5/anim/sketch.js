var x = 0;
var y = 100 ;


function setup() {
  // put setup code here
  createCanvas(200, 200);

}

function draw() {
  // put drawing code here
  background(100);

  rect(x, y, 10, 10);

  x += 5; // x = x + 5

  if (x > width) {
    x = 0 ;
    y = random(height) ;
  }

}
