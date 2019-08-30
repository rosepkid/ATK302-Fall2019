function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight) ;

}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    // this is where you put the "pressed" shapes
    ellipse(width/2, height/2, 50, 50);




  } else {
    // this is for the "unpressed" state

    rect(width/2, height/2, 50, 50);


  }


}

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY ) ;
}
