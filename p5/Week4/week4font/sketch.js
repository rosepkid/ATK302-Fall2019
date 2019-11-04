var modak;
var x = 0 ;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  modak = loadFont('assets/Modak-Regular.ttf');
}

function draw() {
  // put drawing code here
  background(100);
  textFont(modak);

  fill('red');
  text("hello world", x, 150);
  x++ ;
  if (x > width) {
    x = 0 ; 
  }

  textSize(30);
  text("from rose", 20, 250);

}
