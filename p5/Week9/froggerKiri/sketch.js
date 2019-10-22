var cars = [];
var frogPos;
var myState = 0;
var timer = 0;

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER); //or imagemode(CENTER);
  for (var i = 0; i < 5; i++) { //how spawn
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 10);
}



//list of ideas
//how to make object orient in direction of dkeys
//die when you run into certain objects
//it takes heath& makes a noise when you run into something, and when you run out of health you die
// how to make cars avoid you

function draw() {

  switch (myState) {
    case 0: //title screen
      background('blue'); //probably put a picture here
      text("click to play", 300, 500);
      textSize(40);
      break;

    case 1: //game
      game();

      timer++;
      if (timer > 600) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2: //loosing condition
      background('red');
      text("you suck lol", 300, 500);
      textSize(40);
      break;

    case 3: //winning condition
      background('green');
      text("you dont suck", 300, 500);
      textSize(40);
      break;
  }

}

function resetTheGame() {
  cars = []; //clear the array first
  for (var i = 0; i < 5; i++) { //you gotta spawn more cars bb
    cars.push(new Car());
    timer = 0;
  }
}

function Car() {
  //attributes
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.pos = createVector(random(width), random(width));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  //"this is an engine type?" oh she means attribute


  //methods
  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 80, 45);
    fill(this.b, this.g, this.r);
    ellipse(this.pos.x - 15, this.pos.y + 25, 20, 20);
    fill(this.b, this.g, this.r);
    ellipse(this.pos.x + 15, this.pos.y + 25, 20, 20);
  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
} //movement

function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].display();
    //collision detection
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    myState = 3; //they won!
    timer = 0;

  }
  //frog
  fill(47, 224, 94);
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys(); //this moves the frog
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //lose state
      myState = 0;
      resetTheGame();
      break;

    case 3: //win state
      myState = 0;
      resetTheGame();
      break;
  }
}
