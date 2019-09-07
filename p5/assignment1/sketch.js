function setup() {
  // put setup code here
  createCanvas(720, 700);
}

function draw() {
  // put drawing code here
  background('#a3fffa');
  noStroke();

  let s = 'This is ziggy. By day she a normal house cat but, by night she is ruthless ninja cat who fights crime and all the other cats from stealing catnip.';
  fill(50);
  text(s, 20, 50, 700, 100); // Text wraps within text box
  textSize(20)

  if (mouseIsPressed) {
    fill('black');
    rect(255,517, 100, 300);

    fill('brown');
    rect(247,600, 35, 70);

    fill('brown');
    rect(333,600, 35, 70);

    fill('black');
    arc(370, 700, 50, 50, PI, TWO_PI);

    fill('#d99352');
    ellipse(310,400, 300, 250);

    fill('red');
    triangle(189,246, 167,356, 249,286);

    fill('red');
    triangle(439,242, 368,286, 449,352);

    fill('black');
    triangle(299,442, 267,397, 338,398);

    fill('black');
    ellipse(253,341, 40, 50);

    fill('black');
    ellipse(344,342, 40, 50);

    fill('black');
    ellipse(253,341, 20, 30);

    fill('black');
    ellipse(344,342, 20, 30);

    fill('black');
    triangle(197,276, 189,317, 222,289);

    fill('black');
    triangle(428,267, 395,288, 431,321);

    fill('brown');
    arc(370, 700, 100, 100, PI, TWO_PI);

    fill('brown');
    arc(240, 700, 100, 100, PI, TWO_PI);

    fill('black');
    arc(270, 700, 70, 70, PI, TWO_PI);

    fill('black');
    arc(340, 700, 70, 70, PI, TWO_PI);

    fill('brown');
    arc(264, 600, 35, 55, PI, TWO_PI);

    fill('brown');
    arc(350, 600, 35, 55, PI, TWO_PI);

    fill('#d6a676');
    rect(300,610, 10, 90);


    } else {

  fill('#875729');
  rect(255,517, 100, 300);

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







}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}
}
