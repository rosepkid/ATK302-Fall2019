var namesArray = [];
var pumpkin = 0;
var nutella = 0;
var imagesArray = [];
var pumpkinImg, nutellaImg;
var imagesMap;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1Sg3wFIf4HxUSUuwngY3Pj7xjo0q7793PepLUCzvCjCo'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  //  rectMode(CENTER);

  pumpkinImg = loadImage("assets/p.png");
  nutellaImg = loadImage("assets/n.png");

  imagesMap = {
    "Pumpkin Seeds": pumpkinImg,
    "Nutella": nutellaImg
  };

  // image(imagesMap["Pumpkin Seeds"], 0, 0) ; // the 1st parameter = pumpkinImg

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].food, imagesMap[data[i].food]));

    if (data[i].food == "Pumpkin Seeds") pumpkin++;
    if (data[i].food == "Nutella") nutella++;

  }

}


function draw() {
  background('blue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

  textSize(14);
  rect(50, height - 50, 20, -pumpkin * 10);
  text("pumpkin", 50, height - 20);

  rect(100, height - 50, 20, -nutella * 10);
  text("nutella", 100, height - 20);

}


// my circle class
function Circle(myFood, myPic) {
  this.pos = createVector(random(width), random(height));
  this.food = myFood;
  this.vel = random(3);
  this.mySize = random(24, 60);
  this.pic = myPic;

  this.display = function() {

    // put an ellipse here
    fill('black');
    //rect(this.pos.x, this.pos.y, 50, 30) ;
    textSize(this.mySize);
    fill('white');

    //  text(this.food, this.pos.x, this.pos.y);
    //  image(imagesMap[this.food], this.pos.x, this.pos.y, 100, 100) ;

    image(this.pic, this.pos.x, this.pos.y, 100, 100);

  }

  this.drive = function() {
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x > width) this.pos.x = -20;
  }

}
