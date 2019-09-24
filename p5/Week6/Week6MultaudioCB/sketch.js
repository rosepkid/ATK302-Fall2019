var song1, song2, song3;
var myState = 0;


function preload() {



}

function setup() {

  createCanvas(200, 200);
  // set each song to loop and then immediately pause it so it doesn't play
  song1 = loadSound('assets/donkey.mp3', loopStop.bind(this, song1));
  song2 = loadSound('assets/skate.mp3', loopStop.bind(this, song2));
  song3 = loadSound('assets/thrill.mp3', loopStop.bind(this, song3));
}

function loopStop(song) {
  song.loop();
  song.stop();
}

function draw() {
  background(100);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    // hang out in here, put some lyrics or pictures or something while the song plays.
    // put pictures and shapes in here

      break;  // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
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


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 5) {
    myState = 0;
  }
}
