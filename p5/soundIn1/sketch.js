var mic;
var vol;
var y = 799 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);

  ellipse(100, y, 100, 100) ;

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y-- ;

  }


  textSize(18);
  text("My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
