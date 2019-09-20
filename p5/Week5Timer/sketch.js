var timer = 200;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here
  timer = timer - 1;
  if (timer <= 0) {
    background(random(255), random(255), random(255));
    timer = 200 ; 
  }

}
