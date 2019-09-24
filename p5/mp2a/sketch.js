var myState = 0;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch(myState) {

    case 0:
    //
    break ;

    case 1:
    myTimer++ ;
    if (myTimer > 200) {
      myTimer = 0 ;
      myState = 2 ;
    }
    break ;

    case 2:
    break ;

    case 3:
    break;

    case 4:
    break ;

  }


}


function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }
}
