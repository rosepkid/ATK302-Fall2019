// var direction = 0;
var mariah;
var knives ;
var caligirls ;
var jb ;

var wolf;
var sigh;

function preload() {
  mariah = loadImage('Assets/AIWFCIY.jpg');
  // canada = loadImage('Assets/Can.jpg');
  // russian = loadImage('Assets/CDB.jpg');
  california = loadImage('Assets/CG.jpg');
  // despacito = loadImage('Assets/D.jpg');
  // vocaloid = loadImage('Assets/IP.jpg');
  bluegrass = loadImage('Assets/TLO.jpg');
  hindi = loadImage('Assets/TTT.jpg');
  // up = loadImage('assets/OTR.jpg');
  // down = loadImage('assets/KAP.jpg');

  //   wolf = loadSound('Assets/wolfhowl.mp3');
          wolf = loadSound('Assets/lazerhawk.mp3');
     sigh = loadSound('Assets/sigh.mp3');
  // knives = loadSound('Assets/knives.mp3');
  // caligirls = loadSound('Assets/cal.mp3');
//  tunak = loadSound('Assets/daler-mehndi-tunak-tunak-tun-video-youtubemp3free.org.mp3');
  // miku = loadSound('Assets/hatsune-miku-ievan-polkka-project-diva-theatre-hd-youtubemp3free.org.mp3');
  // anthem = loadSound('Assets/hymne-natonal-du-canada-en-franais-youtubemp3free.org.mp3');
   // jb = loadSound('Assets/JBD.mp3');

  // bop = loadSound('Assets/kidz-bop-kids-old-town-road-youtubemp3free.org.mp3');
  // christmas = loadSound('Assets/mariah-carey-all-i-want-for-christmas-is-you-lyrics-youtubemp3free.org.mp3');
  // chum = loadSound('Assets/Weirdrussiansinger-ChumDrumBedrum.mp3');
  //
}
//
// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   comicsans = loadFont('assets/NotoSansJP-Bold.otf');
//

//   tunak.loop();
//   tunak.stop();
//   miku.loop();
//   miku.stop();
//   anthem.loop();
//   anthem.stop();

//   bop.loop();
//   bop.stop();
  // christmas.loop();
  // christmas.stop();
//   chum.loop();
//   chum.stop();
//

function pauseTheMusic() {
  // jb.pause() ;
  // knives.pause() ;
  // caligirls.pause() ;
  wolf.pause();
  sigh.pause();

}

var alpha, beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;

var myState = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // knives.loop();
  // knives.stop();
  // caligirls.loop();
  // caligirls.stop();
  // jb.loop();
  // jb.stop();

  wolf.loop();
  wolf.pause();
  sigh.loop();
  sigh.pause();
  // requestT() ;

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  // imageMode(CENTER);
  // rectMode(CENTER);

}

function draw() {

  background('yellow');

  // alpha is the direction! It starts at 0 when you load the page. If you turn to the left, it goes up,
  // all the way from 1 to 360. If you turn to the right, you'll start at 360 and go down.

  if ((alpha > 0) && (alpha < 45) && (myState != 2)) { // degrees for 1st song; you can change these!

    myState = 1;
  }

  if ((alpha > 46) && (alpha < 90) && (myState != 4)) { // degrees for 2nd song

    myState = 3; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 91) && (alpha < 135) && (myState != 6)) { // degrees for 2nd song

    myState = 5; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 136) && (alpha < 180) && (myState != 8)) { // degrees for 2nd song


    myState = 7; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 181) && (alpha < 225) && (myState != 10)) { // degrees for 2nd song

    myState = 9; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 226) && (alpha < 270) && (myState != 12)) { // degrees for 2nd song

    myState = 11; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 271) && (alpha < 315) && (myState != 14)) { // degrees for 2nd song

    myState = 13; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 316) && (alpha < 360) && (myState != 16)) { // degrees for 2nd song

    myState = 15; // we have to skip a state because each state needs to go to a "hangout" state
  }


  // add the rest to 360...


  // The States of Playing Music

  switch (myState) {
    // states for song 1
    case 1: // this is for the first song.
    //north
      // christmas.play() ;
      pauseTheMusic() ;
      wolf.play() ;
      myState = 2; // Don't hang out here in the "needle-drop" state!!!
      break;

    case 2:
      // put some pretty images here or something, for song1
      image(mariah, 0, 0, windowWidth, windowHeight);
      text("playing wolf howl", 100, 150);
      break;

      // states for song 2
    case 3: // this is for the 2nd song.
      //northwest
      // song2.play() ;
        pauseTheMusic() ;
  wolf.play() ;
      myState = 4; // go directly to the next state so we don't keep needle-dropping!
      break;

    case 4:
      // pretty stuff to hang out here.
      image(bluegrass, 0, 0, windowWidth, windowHeight);
      text("playing song 2", 100, 150);
      break;

      // states for song 2
    case 5:
      // song2.play() ;
        pauseTheMusic() ;
      sigh.play() ;
      myState = 6;
      break;

    case 6:
      // pretty stuff to hang out here.
      image(hindi, 0, 0, windowWidth, windowHeight);
      text("playing man sigh", 100, 150);
      break;

      // states for song 2
    case 7:
      // song2.play() ;
        pauseTheMusic() ;
        wolf.play() ;
      myState = 8;
      break;

    case 8:
      // pretty stuff to hang out here.
      image(california, 0, 0, windowWidth, windowHeight);
      text("playing song 4", 100, 150);
      break;

      // states for song 2
    case 9:
      // song2.play() ;
      // jb.play() ;
        pauseTheMusic() ; 
        wolf.play() ;
      myState = 10;
      break;

    case 10:
      // pretty stuff to hang out here.
      text("playing song 5", 100, 150);
      break;

      // states for song 2
    case 11:
      // song2.play() ;
      myState = 12;
      break;

    case 12:
      // pretty stuff to hang out here.
      text("playing song 6", 100, 150);
      break;

      // states for song 2
    case 13:
      // song2.play() ;
      myState = 14;
      break;

    case 14:
      // pretty stuff to hang out here.
      text("playing song 7", 100, 150);
      break;

    case 15:
      //songwhatever.play();
      myState = 16;
      break;

    case 16:
    //pretty STUFF
    text("playing song 8", 100, 150);
    break;
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
  text("myState = " + myState, 25, 210);

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

// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
