var bunnyPic;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  bunnyPic = loadImage("assets/bunny.jpg");  // actual filename
}

function draw() {
  // put drawing code here
  image(bunnyPic, 20, 100) ;
}
