var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(100);

  fill('red');
  rect(x, 100, 100, 50);
  x = x + 5 ;
  if (x > width) {
    x = 0;
  }
}
