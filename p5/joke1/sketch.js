var myState = 0 ;

function setup() {
  // put setup code here
createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  background(100) ;

  switch(myState) {
    case 0:
    text("why did the chicken?", 10, 10) ;

    // for the second one, put a timer in here.
    break ;

    case 1:
    text("because", 10, 10) ;
    break ;

  }
}


function mouseReleased() {

  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }

}
