var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here
  switch(myState) {
    case 0:
    ellipse(10, 10, 10, 10) ;
    break ;

    case 1:
    // put a timer in here -
    // if timer counted up to 200, go to state 2 and reset timer!


    break ;

    case 2:
    break ;

    case 3:
    break ;

    case 4:
    break ;

  }

}

function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }

  if (myState == 2) {
    myState = 3 ;
  }



}
