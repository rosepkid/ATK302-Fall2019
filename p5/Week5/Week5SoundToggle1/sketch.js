var song1;

function preload() {
  song1 = loadSound('assets/GoldbergV1.mp3');
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  song1.play();

}

function draw() {
  // put drawing code here
}

function mouseReleased() {
  // if the song is playing, pause it, otherwise play it
  if (song1.isPlaying()) {
    song1.pause() ;
  } else {
    song1.play() ; 
  }

}

// song1.pause() ;   song1.isPlaying() ;
