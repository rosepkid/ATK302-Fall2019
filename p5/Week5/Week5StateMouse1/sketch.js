var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background(255, 0, 0);
    text("first state", 100, 100) ;
    break ;

    case 1:
    background(0, 255, 0) ;
    break ;

    case 2:
    background(0, 0, 255) ;
    break;

  }

}

function mouseReleased() {
  // add one to myState
  myState = (myState + 1) % 3 ;

  // if myState went over 2, (there's no 3!)
  //    reset it to 0
  // if (myState > 2) {
  //   myState = 0 ;
  // }
}
