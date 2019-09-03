function setup() {

  // put setup code here

  createCanvas(windowWidth, windowHeight);

  //textAlign(Center);

}



function draw() {

  background('Green');

  fill(0);



text('This is Skwerm the caterpillar. Although a small creature, he and his kind \
  are very beneficial to the realm of \"Aldervaire.\" During the day he is \
practically undetectable as he blends into almost everything. But at night,\
he produces this iredescense that can change any color and is bright enough\
for anyone to see from feet away. He and his kind have the abilility to\
light the entirity of Aldervaire at once, which is very helpful in the\
event of blackouts.', width/2, height/2, 400, 900);



if(mouseIsPressed){

  background('Black');

  fill(0);



  fill(219, 112, 147);

  ellipse(50, 50, 50, 50);



  fill(139, 71, 93);

  ellipse(70, 70, 50, 50);



  fill(221, 160, 221);

  ellipse(90, 90, 50, 50);



  fill(160, 32, 240);

  ellipse(110, 110, 50, 50);



  fill(171, 130, 255);

  ellipse(130, 130, 50, 50);



  fill(255, 52, 179);

  ellipse(150, 150, 50, 50);



}else{

  //fill(255, 250, 250);

//  rect(460,380,200,40);

fill(205, 201, 201);

ellipse(50, 50, 50, 50);



fill(139, 137, 137);

ellipse(70, 70, 50, 50);



fill(122, 139, 139);

ellipse(90, 90, 50, 50);



fill(205, 201, 201);

ellipse(110, 110, 50, 50);



fill(139, 137, 137);

ellipse(130, 130, 50, 50);



fill(122, 139, 139);

ellipse(150, 150, 50, 50);

}

fill(255);

text(mouseX + ',' + mouseY, 20, 20);



function mouseReleased() {

  console.log(mouseX + ', ' + mouseY);

}

}
