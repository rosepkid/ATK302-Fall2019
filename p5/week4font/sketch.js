var modak;


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
  text("hello world", 20, 150);

  textSize(30);
  text("from rose", 20, 250);

}
