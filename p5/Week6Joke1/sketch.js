let myState = 0;

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

      //for joke 2 put timer
      break;

    case 1:
      background('pink')
      text("An irrelephant", 100, 100);

      break;



  }


}


function mouseReleased() {
  myState += 1;
  if (myState > 2) {
    myState = 0
  }
}
