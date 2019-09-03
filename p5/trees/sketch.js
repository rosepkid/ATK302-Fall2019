function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800); // always in the setup


}

function draw() {
  background(0, 100, 200);
  noStroke() ;

  fill('orange');
  ellipse(284, 374, 100, 100);


  fill(random(255), random(255), random(255));
  text(mouseX + ',' + mouseY, 20, 20);
}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY);
}
