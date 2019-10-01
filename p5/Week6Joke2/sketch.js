let myState = 0;
var myTimer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch (myState) {

    case 0:
      background('green');
      text("What do you call an elephant that doesn’t matter?", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState = 1;
        myTimer = 0;
      }
      break;

    case 1:
      background('pink');
      text("An irrelephant", 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState = 0;
        myTimer = 0;
      }
      break;
  }
}
