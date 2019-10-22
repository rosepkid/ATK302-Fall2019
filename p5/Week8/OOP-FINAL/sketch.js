// var myCar;
// var myCar1;
// var myCar2;

var cars = []; // array of something
var frogPos;

function setup() {
  // put setup code here
  createCanvas(800, 600);

  // myCar = new Car(); // gave birth to a new object
  // myCar1 = new Car();

  for (var i = 0; i < 40; i++) {
    cars.push(new Car(i));
  }

  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  // put drawing code here
  background(100);

  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();

    var distance = cars[i].pos.dist(frogPos);
    if (distance < 15) {
      // do either this
      cars[i].r = 0;
      cars[i].b = 0;
      cars[i].g = 0
      cars[i].alive = false;
      cars[i].vel = 0;

      // or this
      cars.splice(i, 1) ;


    }
  }


  // for (var i = 0; i < cars.length; i++) {
  //   if (cars[i].alive === false) {
  //     console.log("deleting car " + i ) ;
  //     cars.splice(i, 1) ;
  //   }
  // }


  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function mouseReleased() {



  console.log("beep");
  // cars.pop(floor(random(cars.length)));
  console.log("length of car array is " + cars.length);
}


function checkForKeys() {
  //  console.log(keyCode);  // left = 37, etc.

  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;


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
