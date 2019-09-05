function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background('#a3fffa');
  noStroke();

  fill('Yellow');
  ellipse(60, 70, 100, 100);

  fill('brown');
  rect(170, 225, 50, 300);

  fill('green');
  triangle(72,249, 334,240, 195,99);

  // fill('blue');
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill('black');
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill('Yellow');
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
  fill('black') ;
  text(mouseX + ',' + mouseY, 30, 30);
}


function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}
