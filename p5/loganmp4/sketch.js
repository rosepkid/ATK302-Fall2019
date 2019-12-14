var cars = [];
var frogPos;
var myState = 0;
var myTimer = 10000;
var myBugColor = 1;
var bugsEaten = 0;
var startMillis = 0;


// added for gyrocollector
var beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;



function setup() {
  frameRate(60);
//  createCanvas(800, 800);
  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  SpaceShip = loadImage("assets/spaceship.png");
  Bug1 = loadImage("assets/enemy1.png");
  Bug2 = loadImage("assets/enemy2.png");
  Bug3 = loadImage("assets/enemy3.png");

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
}



function draw() {
  background(100);

  switch (myState) {
    case 0: // splash screen
      splashScreen();
      break;

    case 1: // the game state
      gameState();
      break;

    case 2: // the win state
      winState();
      break;

    case 3: // the lose state
      loseState();
      break;

  }
}

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

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
    //image (Bug1, this.pos.x, this.pos.y, 100, 50) ;

    if (myBugColor === 1) {
      image(Bug1, this.pos.x, this.pos.y, 100, 50);
    }

    if (myBugColor === 2) {
      image(Bug2, this.pos.x, this.pos.y, 100, 50);
    }

    if (myBugColor === 3) {
      image(Bug3, this.pos.x, this.pos.y, 100, 50);
    }

    myBugColor++;
    if (myBugColor > 3) {
      myBugColor = 1;
    }

    //rect(this.pos.x, this.pos.y, 100, 50);
  };

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.x > width) this.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  };

}

function mouseReleased() {
  switch (myState) {
    case 0: // splash screen
    startMillis = millis();
      myState = 1;
      break;

    case 2: // the win state
      resetNewGame();
      myState = 0;
      break;

    case 3: // the lose state
      resetNewGame();
      myState = 0;
      break;

  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function keyPressed() {
  if (keyCode === ENTER) {
    startMillis = millis();
    myState = 1;
  } else if (keyCode === ESCAPE) {
    myState = 0;
  }
}

function splashScreen() {
  background(255, 0, 0);
  //textFont("Hallows", 40);
  textSize(70);
  text('SPACEBUGZ', 200, 145)
  rect(400, 400, 450, 110)
  fill(255, 252, 71)
  textSize(45);
  text('Press ENTER to Play', 185, 400);
  textSize(20);
  text('Eat 25 bugs in 10 seconds to win!', 255, 430);
  fill(0);
  image(Bug1, 515, 200, 170, 100);
  image(Bug2, 315, 200, 170, 100);
  image(Bug3, 115, 200, 170, 100);
  image(SpaceShip, 306, 500, 190, 200);

}

function gameState() {
  //bg = loadImage('assets/night.jpg');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 70) {
      cars.splice(i, 1);
      bugsEaten++;
    }
  }

  // Draw the frog from gyroscope
  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -40, 40, 0, width);
  yPosition = map(beta, 20, 50, 0, height-50);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(xPosition)); // using alpha in here so it doesn't feel bad

  // image(bunnyImage, 0, 0, 500, 500);

//  ellipse(0, 0, 200, 200);
  image(SpaceShip, 0, 0);
  pop();


  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // // draw the frog
  // fill('green');
  // image(SpaceShip, frogPos.x, frogPos.y);
  checkForKeys();

  if (millis() >= startMillis + myTimer) {
    myState = 3;
  }

  if (bugsEaten >= 25) {
    myState = 2;
  }

  fill(255, 252, 71);
  textSize(20);
  text('Bugs eaten: ' + bugsEaten, 600, 780)

  // for debugging accelerometer
  fill('white');
  textSize(15);

  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);

} //endgamestate

function winState() {

  background(0, 0, 255);
  rect(400, 400, 1100, 100);
  fill(255, 252, 71);
  textSize(50);
  text('YOU WIN!', 270, 400);
  fill(255, 252, 71);
  textSize(20);
  text('Pres "Esc" to return to Menu', 260, 430);
  fill(255, 0, 0);


}

function loseState() {
  background(0);

  fill(0, 255, 0);
  textSize(50);
  text('YOU LOSE', 250, 400);
  fill(0, 255, 0);
  textSize(20);
  text('Pres "Esc" to return to Menu', 253, 450);

}

function resetNewGame() {
  //Reset the cars and the spaceship to starting positions

  bugsEaten = 0;
  cars.length = 0;
  for (i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
}
