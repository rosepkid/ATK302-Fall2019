var myState = 0;
var myScore = 0;
var numQuestionsAsked = 0;
var myLogo;
var capriola;
var corben;

// THIS ONE POINTS TO YOURS!!!
//var myQuiz = '1tTYEvW3bssQF9XLH88e7n7VrTGK4mwPCPnAyCZRuvFM';

// THIS ONE POINTS TO MY TEST ONE!!
var myQuiz = '1THGjGo17uHS2MW6IHAXFD602sRWrEWS0_U5khU9TWAM';


var questionsArray = [];
var rq = 0;
var timer = 0;
var randomAnswer = 0;
var correctLineTop = 175; // this is the top-most of where the correct answer is and it gets reset in the question display
var imagesArray = [] ;

function preload() {
  myLogo = loadImage("assets/thetquizlogo-02.png");
  capriola = loadFont("assets/Capriola.ttf");
  corben = loadFont("assets/Corben.ttf");


//  imagesArray[x] = loadImage(x+".png") ;


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  unloadScrollBars();
  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);

  let settings = {
    key: myQuiz, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings);

}

function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    questionsArray.push(new Question(data[i].Question, data[i].A, data[i].B, data[i].C, data[i].D, data[i].Answer));
  }

}

function draw() {
  noStroke();

  switch (myState) {
    case 0:
      background('#455160'); //gray
      image(myLogo, width / 2, height / 2 - 50, 152.2 * 3, 118.8 * 3);
      fill('#d8d8d8'); //white
      textSize(16);
      textFont(capriola);
      text("Click \"START\" to play", width / 2, height / 2 + 190);
      fill('#e1cb28'); //yellow
      rect(width / 2, height / 2 + 240, 120, 50, 10);
      fill('#455160'); //gray
      textSize(28);
      text('START', width / 2, height / 2 + 250);
      break;

    case 1:
      // get a random question out
      background('#455160'); //gray
      textAlign(LEFT);
      image(myLogo, width / 12, height / 7, 152.2, 118.8)

      fill('#e1cb28');
      rect(width / 2, height - 50, windowWidth, 100); //yellow bar
      fill('black');
      textFont(corben);
      textSize(60);
      text('Score: 1000', 190, height - 15); //Score
      fill('#455160');
      rect(width / 2 + 100, height - 50, 400, 75); //Scoreboard
      fill('black');
      textSize(100);
      textFont(corben);
      text('T', width - 100, height - 15); //Progress T
      textSize(12);
      text(myScore + "/" + numQuestionsAsked, width - 150, height - 15); //Question progress

      var m = floor(random(questionsArray.length));
      rq = questionsArray[m];

      if (rq != null) {  // once in a while rq ends up null, not sure why.
        rq.display();

        myState = 2;
      } else {
        console.log("received a null rq");
        myState = 1;
      }
      break;

    case 2:

      break;

    case 20:
      background('green');
      text("welcome to case 20 cool fun experience", 100, 100);
      break;


    case 30:
      background('blue');
      text("welcome to case 30 awesome hip type fun", 100, 100);
      break;


    case 100:
      // go to a random state!

      // if numQuestionsAsked == 10, go to state 0 or some "win" state?
      if (numQuestionsAsked == 10) {
        myState = 101;
      } else {
        // what state to go to?
        // most of the time, let's go to state 1.
        let whatState = random(100);
        if (whatState > 10) {
          myState = 1;
        } else {
          if (whatState < 5) {
            myState = 20;
          } else {
            myState = 30;
          }
        }
      }

      break;

    case 101:
      background('grey');
      text("Thanks for playing!\nScore: " + myScore + "\\" + numQuestionsAsked, width / 2, height / 2);
      break;
  }



}



function mouseReleased() {
  switch (myState) {

    case 0: // the splash screen
      myState = 100; // 100 is the state that goes to a random thingy
      break;


    case 2: // the random question pulled from database
      if ((mouseX > 740) && (mouseY > correctLineTop) && (mouseY < correctLineTop + 50)) {
        myScore++;
        console.log('yay');
      } else {
        console.log('nope!');
      }
      numQuestionsAsked++; // maybe this only gets done if mouseX > 740?

      myState = 100; // 100 is the state that goes to a random thingy
      break;

    case 20:
      myState = 100;
      break;

    case 30:
      myState = 100;
      break;

    case 101:
      myState = 0;
      // this is a good place to reset everything if you need to
      numQuestionsAsked = 0;
      myScore = 0;
      break;

  }

  console.log(mouseX + ',' + mouseY);
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = "no"; // ie only
}


// The QUESTION Class!!!
function Question(myQuestion, myA, myB, myC, myD, myAnswer) {

  // attributes
  this.pos = createVector(random(width), random(height));
  this.question = myQuestion;
  this.a = myA;
  this.b = myB;
  this.c = myC;
  this.d = myD;
  this.answer = myAnswer; // we aren't using this.


  // methods
  this.display = function() {

    // display the question
    fill('#e1cb28');
    textSize(32);
    text(this.question, 750, 150);

    // display the answers
    textFont(capriola);
    textSize(16);
    fill('#d8d8d8');

    // push all the answers onto a temporary array
    var ary = [];
    ary.push(this.a);
    ary.push(this.b);
    ary.push(this.c);
    ary.push(this.d);

    // go through the temporary array 4 times and "pop" and display a random answer
    for (var i = 0; i < 4; i++) {

      // get a random answer out
      var r = floor(random(ary.length)); // choose a random answer to take out

      randomAnswer = ary[r]; // here's the random answer (a String)
      //  console.log("randomAnswer = " + randomAnswer) ;
      ary.splice(r, 1); // pop that element out of the array so we don't re-use it

      if (randomAnswer.charAt(0) == "*") { // is it the correct answer?
        randomAnswer = randomAnswer.substr(1); // delete that star off (char 0) if it is!
        correctLineTop = 175 + (i * 50); // set the correct line top depending on i
      }

      text(randomAnswer, 750, 200 + i * 50); // display that answer

    }

  }

}
