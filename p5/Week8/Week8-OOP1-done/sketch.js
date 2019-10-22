var myCar1;
var myCar2;
var myCar3;

function setup() {

  createCanvas(800, 800);
  myCar1 = new Car();
  myCar2 = new Car();
  myCar3 = new Car();

}

function draw() {
  background(100);

  myCar1.display();
  myCar1.move();

  myCar2.display();
  myCar2.move();

  myCar3.display();
  myCar3.move();

}


function Car() {

  this.x = 100;
  this.pos = createVector(random(width), random(height));

// methods
// what it looks like
  this.display = function() {
    rect(this.pos.x, this.pos.y, 100, 50);
  }

// how it moves
  this.move = function() {
    this.pos.x = this.pos.x + 1;
  }

}
