var song1;

function preload() {
  song1 = loadSound('assets/starwars.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();

}

function draw() {



}

function mouseReleased() {
  song1.stop();
}
