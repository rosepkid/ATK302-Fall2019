// var myCar;
// var myCar1;
// var myCar2;

var cars = []; // array of something
var frogPos;


function draw1() {
  // put drawing code here
  background(100);





}

function mouseReleased() {



  console.log("beep");
  // cars.pop(floor(random(cars.length)));
  console.log("length of car array is " + cars.length);
}




// ***********************************
// DEFINE A CLASS CALLED CAR()

function Car(num) {
  // constructor
  // properties are here
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-3, 3), 0);
  this.wide = random(40, 80);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.alive = true ;
  this.name = num ;

  // methods

  this.move = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }

  this.display = function() {
    fill(0);
    textSize(20) ;
    text("car "+this.name, this.pos.x, this.pos.y - 30);
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.wide, 20);
    ellipse(this.pos.x - 5, this.pos.y + 20, 20, 20);
    ellipse(this.pos.x + 45, this.pos.y + 20, 20, 20);
  }

}
