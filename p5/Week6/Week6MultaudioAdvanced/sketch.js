var song1, song2, song3;
var myState = 0;
var amp = 0;
var progressBar = 200;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function setup() {

  createCanvas(200, 200);
  amplitude = new p5.Amplitude();

}

function draw() {
  background(100);
  switch (myState) {

    case 0:
      song1.play();
      myState = 1;
      break;

    case 1:
      progressBar = map(song1.currentTime(), 0, song1.duration(), 0, 200);
      rect(10, 10, progressBar, 10);

      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;

  }

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200); // level goes 0 to 1, outputs size 0 to 200
  ellipse(width / 2, height / 2, size, size);

}

function mouseReleased() {
  myState++;
  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 5) {
    myState = 0;
  }
}
