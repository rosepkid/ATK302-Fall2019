var score = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 500);
}

function draw() {
  // put drawing code here
//  background(100) ;

  fill(random(255), 0, 0) ;  // random reds
  rect(mouseX, mouseY, 10, 10) ;
  textSize(50) ;
  text(score, 30, 60) ;
}

function mouseReleased() {

  score++ ;

}
