
var alpha, beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;

var myState = 0 ;

function setup() {

  createCanvas(windowWidth, windowHeight);
 // requestT() ;

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5ff'); // light blue

  // alpha is the direction! It starts at 0 when you load the page. If you turn to the left, it goes up,
  // all the way from 1 to 360. If you turn to the right, you'll start at 360 and go down.

if ((alpha > 0) && (alpha < 15)) {  // degrees for 1st song; you can change these!
  myState = 1 ;
}

if ((alpha > 16) && (alpha < 30)) {  // degrees for 2nd song
  myState = 3 ; // we have to skip a state because each state needs to go to a "hangout" state
}

if ((alpha > 31) && (alpha < 45)) {  // degrees for 2nd song
  myState = 5 ; // we have to skip a state because each state needs to go to a "hangout" state
}

// add the rest to 360...


// The States of Playing Music

  switch(myState) {
// states for song 1
      case 1 : // this is for the first song.
      // song1.play() ;
      myState = 2 ; // Don't hang out here in the "needle-drop" state!!!
      break ;

      case 2 :
      // put some pretty images here or something, for song1
      break ;

// states for song 2
      case 3: // this is for the 2nd song.
      // song2.play() ;
      myState = 4 ; // go directly to the next state so we don't keep needle-dropping!
      break;

      case 4:
      // pretty stuff to hang out here.
      break ;

// states for song 3... you get the idea!


  }



  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha.toFixed(0), 25, 50);
  text("beta: " + beta.toFixed(0), 25, 70);
  text("gamma: " + gamma.toFixed(0), 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);


  text("x = " + x.toFixed(0), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(0), 25, 170);
  text("z = " + z.toFixed(0), 25, 190);

}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

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
