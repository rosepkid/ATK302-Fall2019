function setup() {
  // put setup code here
  createCanvas(800, 800);
  //  rectMode(CENTER); // center all rectangles
}

function draw() {
  // put drawing code here
  fill('red');
  rect(100, 100, 100, 100);

}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    console.log("beep");
  }

}
