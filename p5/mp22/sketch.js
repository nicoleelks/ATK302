var myState = 0;
var timer = 200;
var x = 0;
var velocity = 5;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  //rectMode(CENTER);
  //ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  let s = 'Click the screen when the mouse is on the right side of the cat for a suprise! (Worked on mp2 for a total of 6 hours within atom and on p5js)';
  fill(50);
  text(s, 20, 50, 700, 100); // Text wraps within text box
  textSize(20)

  background(100);

  switch (myState) {
    case 0: // green state

      fill('#875729');
      rect(255, 517, 100, 175);

      fill('#d6a676');
      rect(247, 600, 35, 70);

      fill('#d6a676');
      rect(333, 600, 35, 70);

      fill('black');
      arc(370, 700, 50, 50, PI, TWO_PI);

      fill('#ba8857');
      ellipse(310, 400, 300, 250);

      fill('brown');
      triangle(189, 246, 167, 356, 249, 286);

      fill('brown');
      triangle(439, 242, 368, 286, 449, 352);

      fill('brown');
      triangle(299, 442, 267, 397, 338, 398);

      fill('#a3fffa');
      ellipse(253, 341, 40, 50);

      fill('#a3fffa');
      ellipse(344, 342, 40, 50);

      fill('black');
      ellipse(253, 341, 20, 30);

      fill('black');
      ellipse(344, 342, 20, 30);

      fill('pink');
      triangle(197, 276, 189, 317, 222, 289);

      fill('pink');
      triangle(428, 267, 395, 288, 431, 321);

      fill('#d6a676');
      arc(370, 700, 100, 100, PI, TWO_PI);

      fill('#d6a676');
      arc(240, 700, 100, 100, PI, TWO_PI);

      fill('black');
      arc(270, 700, 70, 70, PI, TWO_PI);

      fill('black');
      arc(340, 700, 70, 70, PI, TWO_PI);

      fill('#d6a676');
      arc(264, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      arc(350, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      rect(300, 610, 10, 90);


      break;

    case 1: // green state

      fill('#875729');
      rect(255, 517, 100, 175);

      fill('#d6a676');
      rect(247, 600, 35, 70);

      fill('#d6a676');
      rect(333, 600, 35, 70);

      fill('black');
      arc(370, 700, 50, 50, PI, TWO_PI);

      fill('#ba8857');
      ellipse(310, 400, 300, 250);

      fill('brown');
      triangle(189, 246, 167, 356, 249, 286);

      fill('brown');
      triangle(439, 242, 368, 286, 449, 352);

      fill('brown');
      triangle(299, 442, 267, 397, 338, 398);

      fill('#a3fffa');
      ellipse(253, 341, 40, 50);

      fill('#a3fffa');
      ellipse(344, 342, 40, 50);

      fill('black');
      ellipse(253, 341, 20, 30);

      fill('black');
      ellipse(344, 342, 20, 30);

      fill('pink');
      triangle(197, 276, 189, 317, 222, 289);

      fill('pink');
      triangle(428, 267, 395, 288, 431, 321);

      fill('#d6a676');
      arc(370, 700, 100, 100, PI, TWO_PI);

      fill('#d6a676');
      arc(240, 700, 100, 100, PI, TWO_PI);

      fill('black');
      arc(270, 700, 70, 70, PI, TWO_PI);

      fill('black');
      arc(340, 700, 70, 70, PI, TWO_PI);

      fill('#d6a676');
      arc(264, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      arc(350, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      rect(300, 610, 10, 90);

      doTimer(1, 200);
      velocity = 5;
      break;

    case 2: // yellow state      fill('grey');

      fill('#875729');
      rect(255, 517, 100, 175);

      fill('#d6a676');
      rect(247, 600, 35, 70);

      fill('#d6a676');
      rect(333, 600, 35, 70);

      fill('black');
      arc(370, 700, 50, 50, PI, TWO_PI);

      fill('#ba8857');
      ellipse(310, 400, 300, 250);

      fill('brown');
      triangle(189, 246, 167, 356, 249, 286);

      fill('brown');
      triangle(439, 242, 368, 286, 449, 352);

      fill('brown');
      triangle(299, 442, 267, 397, 338, 398);

      fill('#a3fffa');
      ellipse(253, 341, 40, 50);

      fill('#a3fffa');
      ellipse(344, 342, 40, 50);

      fill('black');
      ellipse(253, 350, 20, 30);

      fill('black');
      ellipse(343, 350, 20, 30);

      fill('pink');
      triangle(197, 276, 189, 317, 222, 289);

      fill('pink');
      triangle(428, 267, 395, 288, 431, 321);

      fill('#d6a676');
      arc(370, 700, 100, 100, PI, TWO_PI);

      fill('#d6a676');
      arc(240, 700, 100, 100, PI, TWO_PI);

      fill('black');
      arc(270, 700, 70, 70, PI, TWO_PI);

      fill('black');
      arc(340, 700, 70, 70, PI, TWO_PI);

      fill('#d6a676');
      arc(264, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      arc(350, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      rect(300, 610, 10, 90);

      doTimer(2, 100);
      velocity = 2;
      break;

    case 3: // red state
      fill('#875729');
      rect(255, 517, 100, 175);

      fill('#d6a676');
      rect(247, 600, 35, 70);

      fill('#d6a676');
      rect(333, 600, 35, 70);

      fill('black');
      arc(370, 700, 50, 50, PI, TWO_PI);

      fill('#ba8857');
      ellipse(310, 400, 300, 250);

      fill('brown');
      triangle(189, 246, 167, 356, 249, 286);

      fill('brown');
      triangle(439, 242, 368, 286, 449, 352);

      fill('brown');
      triangle(299, 442, 267, 397, 338, 398);

      fill('#a3fffa');
      ellipse(253, 341, 40, 50);

      fill('#a3fffa');
      ellipse(344, 342, 40, 50);

      fill('black');
      ellipse(255, 350, 20, 30);

      fill('black');
      ellipse(345, 350, 20, 30);

      fill('black');
      triangle(280, 280, 250, 300, 290, 370);

      fill('black');
      triangle(320, 280, 350, 300, 300, 370);


      fill('pink');
      triangle(197, 276, 189, 317, 222, 289);

      fill('pink');
      triangle(428, 267, 395, 288, 431, 321);

      fill('#d6a676');
      arc(370, 700, 100, 100, PI, TWO_PI);

      fill('#d6a676');
      arc(240, 700, 100, 100, PI, TWO_PI);

      fill('black');
      arc(270, 700, 70, 70, PI, TWO_PI);

      fill('black');
      arc(340, 700, 70, 70, PI, TWO_PI);

      fill('#d6a676');
      arc(264, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      arc(350, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      rect(300, 610, 10, 90);

      doTimer(2, 100);
      velocity = 0;
      break;

    case 4:
      fill('#875729');
      rect(255, 517, 100, 175);

      fill('#d6a676');
      rect(247, 600, 35, 70);

      fill('#d6a676');
      rect(333, 600, 35, 70);

      fill('black');
      arc(370, 700, 50, 50, PI, TWO_PI);

      fill('#ba8857');
      ellipse(310, 400, 300, 250);

      fill('brown');
      triangle(189, 246, 167, 356, 249, 286);

      fill('brown');
      triangle(439, 242, 368, 286, 449, 352);

      fill('brown');
      triangle(299, 442, 267, 397, 338, 398);

      fill('#a3fffa');
      ellipse(253, 341, 40, 50);

      fill('#a3fffa');
      ellipse(344, 342, 40, 50);

      fill('black');
      ellipse(255, 350, 20, 30);

      fill('black');
      ellipse(345, 350, 20, 30);

      fill('black');
      triangle(280, 280, 250, 300, 290, 370);

      fill('black');
      triangle(320, 280, 350, 300, 300, 370);


      fill('pink');
      triangle(197, 276, 189, 317, 222, 289);

      fill('pink');
      triangle(428, 267, 395, 288, 431, 321);

      fill('#d6a676');
      arc(370, 700, 100, 100, PI, TWO_PI);

      fill('#d6a676');
      arc(240, 700, 100, 100, PI, TWO_PI);

      fill('black');
      arc(270, 700, 70, 70, PI, TWO_PI);

      fill('black');
      arc(340, 700, 70, 70, PI, TWO_PI);

      fill('#d6a676');
      arc(264, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      arc(350, 600, 35, 55, PI, TWO_PI);

      fill('#d6a676');
      rect(300, 610, 10, 90);

      break;

  }

  fill('black');
  arc(x, 700, 100, 100, PI, TWO_PI);
  fill('brown');
  ellipse(x + 45, 680, 50, 40);
  x = x + velocity;
  if (x > width) {
    x = 0;
  }

}



function mouseReleased() {
  myState += 1;
  if (myState > 4) {
    myState = 0;
  }
}

function doTimer(variableState, variableTimer) {
  timer--;
  if (timer <= 0) {
    timer = variableTimer;
    myState = variableState;
  }
}
