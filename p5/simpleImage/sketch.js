var img ;

function setup() {
  // put setup code here
  createCanvas(1000, 800) ;
  img = loadImage("assets/reggie.jpg") ;
}

function draw() {
  // put drawing code here
  image(img, 0, 0) ;
}
