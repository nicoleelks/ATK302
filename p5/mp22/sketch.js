var myState = 0;
//var myTimer = 10;
var x = 0;
var velocity = 3;
var timer = 200 ;

function setup() {
  createCanvas(800, 800);

}


function draw() {
  // put drawing code here

  switch (myState) {

    case 0:
    fill('#875729');
    rect(255,517, 100, 175);

    fill('#d6a676');
    rect(247,600, 35, 70);

    fill('#d6a676');
    rect(333,600, 35, 70);

    fill('black');
    arc(370, 700, 50, 50, PI, TWO_PI);

    fill('#ba8857');
    ellipse(310,400, 300, 250);

    fill('brown');
    triangle(189,246, 167,356, 249,286);

    fill('brown');
    triangle(439,242, 368,286, 449,352);

    fill('brown');
    triangle(299,442, 267,397, 338,398);

    fill('#a3fffa');
    ellipse(253,341, 40, 50);

    fill('#a3fffa');
    ellipse(344,342, 40, 50);

    fill('black');
    ellipse(253,341, 20, 30);

    fill('black');
    ellipse(344,342, 20, 30);

    fill('pink');
    triangle(197,276, 189,317, 222,289);

    fill('pink');
    triangle(428,267, 395,288, 431,321);

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
    rect(300,610, 10, 90);

  //  myTimer++;
  //  if (myTimer >= 100) {
    //  myState = 1;
    //  myTimer = 0;
  //  }



    break;

    case 1:
    fill('#875729');
    rect(255,517, 100, 175);

    fill('#d6a676');
    rect(247,600, 35, 70);

    fill('#d6a676');
    rect(333,600, 35, 70);

    fill('black');
    arc(370, 700, 50, 50, PI, TWO_PI);

    fill('#ba8857');
    ellipse(310,400, 300, 250);

    fill('brown');
    triangle(189,246, 167,356, 249,286);

    fill('brown');
    triangle(439,242, 368,286, 449,352);

    fill('brown');
    triangle(299,442, 267,397, 338,398);

    fill('#a3fffa');
    ellipse(253,341, 40, 50);

    fill('#a3fffa');
    ellipse(344,342, 40, 50);

    fill('black');
    ellipse(250,350, 20, 30);

    fill('black');
    ellipse(340,350, 20, 30);

    fill('pink');
    triangle(197,276, 189,317, 222,289);

    fill('pink');
    triangle(428,267, 395,288, 431,321);

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
    rect(300,610, 10, 90);

    fill('black');
    arc(50, 700, 100, 100, PI, TWO_PI);

    fill('brown');
    ellipse(100,680, 50, 40);


    }

    break;

    case 2:
    fill('#875729');
    rect(255,517, 100, 175);

    fill('#d6a676');
    rect(247,600, 35, 70);

    fill('#d6a676');
    rect(333,600, 35, 70);

    fill('black');
    arc(370, 700, 50, 50, PI, TWO_PI);

    fill('#ba8857');
    ellipse(310,400, 300, 250);

    fill('brown');
    triangle(189,246, 167,356, 249,286);

    fill('brown');
    triangle(439,242, 368,286, 449,352);

    fill('brown');
    triangle(299,442, 267,397, 338,398);

    fill('#a3fffa');
    ellipse(253,341, 40, 50);

    fill('#a3fffa');
    ellipse(344,342, 40, 50);

    fill('black');
    ellipse(250,350, 20, 30);

    fill('black');
    ellipse(340,350, 20, 30);

    fill('black');
    triangle(280,280, 250,300, 290,370);

    fill('black');
    triangle(320,280, 350,300, 300,370);


    fill('pink');
    triangle(197,276, 189,317, 222,289);

    fill('pink');
    triangle(428,267, 395,288, 431,321);

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
    rect(300,610, 10, 90);

    fill('black');
    arc(50, 700, 100, 100, PI, TWO_PI);

    fill('brown');
    ellipse(100,680, 50, 40);

    
    }

    break ;

    case 3:
    fill('black');
    arc(x, 700, 100, 100, PI, TWO_PI);
    fill('brown');
    ellipse(x ,680, 50, 40);

    doTimer (1, 200) ;
    velocity = 5 ;
    //x = x + velocity;
    //if (x > width) {
    //  x = 0;
    //}

       //myTimer++;
       //if (myTimer >= 100) {
         //myState = 4;
        // myTimer = 0;
       //}
    //break;
}
fill('black');
arc(x, 700, 100, 100, PI, TWO_PI);
fill('brown');
ellipse(x ,680, 50, 40);
x = x + velocity;
if (x > width) {
  x = 0;
}

}

function doTimer(variableState, variableTimer) {
  timer--;
  if (timer <=0) {
    timer = variableTimer;
    myState = variableState;
  }
}

function mouseReleased() {
  myState += 1 ;
  if (myState > 2) {
    myState = 0 ;
  }

  }



// you need to click the screen b
