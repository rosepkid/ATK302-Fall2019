var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;

function setup() {

  createCanvas(800, 800);
  yodaRight = loadImage("assets/yoda.gif");
  yodaLeft = loadImage("assets/yodaLeft.gif");
  yoda = yodaLeft ;

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }


  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
      // welcome to my game, click to start
      background('red');
      fill('white');
      text("welcome to my game! click!", 100, 100);
      text("YAY", 100, 200);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 1500) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      background('green');
      fill('white');
      text("YOU WON!!!", 100, 100);
      break;

    case 3: // the lose state
      background('blue');
      fill('white');
      text("You LOST!", 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // the win state!
      resetTheGame();
      myState = 0;
      break;

    case 3: // the lose myState
      resetTheGame();
      myState = 0;
      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
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

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;

}

function keyPressed() {
  console.log("hello");
  if (keyCode === RIGHT_ARROW) yoda = yodaRight ;
  if (keyCode === LEFT_ARROW) yoda = yodaLeft ;
}

function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2;
  }

  // draw the frog
  //  fill('green');
  //  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}
