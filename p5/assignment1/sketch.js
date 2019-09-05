function setup() {
  // put setup code here
  createCanvas(720, 700);
}

function draw() {
  // put drawing code here
  background('#a3fffa');
  noStroke();


  if (mouseIsPressed) {
    fill('red');
    ellipse(310,400, 300, 250);

    fill('gray');
    triangle(189,246, 167,356, 249,286);

    fill('gray');
    triangle(439,242, 368,286, 449,352);

    fill('gray');
    triangle(299,442, 267,397, 338,398);

    fill('black');
    ellipse(253,341, 40, 50);

    fill('black');
    ellipse(344,342, 40, 50);

    fill('black');
    ellipse(253,341, 20, 30);

    fill('black');
    ellipse(344,342, 20, 30);

    fill('red');
    triangle(197,276, 189,317, 222,289);

    fill('red');
    triangle(428,267, 395,288, 431,321);


    } else {
  fill('#d99352');
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

  fill('black');
  rect(332, 398, 100, 5);





  fill('black') ;
  text(mouseX + ',' + mouseY, 30, 30);
}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}
}
