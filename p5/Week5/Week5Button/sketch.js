function setup() {
  // put setup code here
  createCanvas(300, 300);
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
