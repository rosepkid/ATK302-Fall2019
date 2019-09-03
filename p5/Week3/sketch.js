var score = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 500) ;
  textAlign(CENTER) ;

}

function draw() {
  // put drawing code here

  //  text("rose", width/2, height/2) ;
  rect(mouseX, mouseY, 10, 10) ;
  textSize(100) ;
  text(score, 30, 30) ;
}

function mouseReleased() {
//  background(random(255), random(255), random(255));

  background(random(255), 0, 0);  // random REDS only

  score++ ;
}
