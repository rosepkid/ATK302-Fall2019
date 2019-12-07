var alpha, beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;

var myState = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;



}

function draw() {
  background('yellow') ;




  // Just a bunch of text commands to display data coming in from gyroscope
  textAlign(LEFT);
  textSize(20);
  fill('black');

  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha.toFixed(0), 25, 50);  // direction around you
  text("beta: " + beta.toFixed(0), 25, 70);
  text("gamma: " + gamma.toFixed(0), 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);


  text("x = " + x.toFixed(0), 25, 150); // .toFixed(x) means just show x decimal places
  text("y = " + y.toFixed(0), 25, 170);
  text("z = " + z.toFixed(0), 25, 190);
//  text("myState = " + myState, 25, 210);

}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!
// DON'T MESS WITH IT.

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


// YOU NEED THIS FOR SOUND! IF YOU'RE NOT SURE, LEAVE IT IN.
// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
