var myFont ;
var x = 0 ;



function setup() {
  // put setup code here
  createCanvas(800,800) ;
  myFont = loadFont("assets/Chilanka-Regular.ttf") ;
}

function draw() {
  // put drawing code here
  background('black') ;
  textFont(myFont, 24) ;
  fill('blue')
  text("Hello World", x, 50) ;
  x = x + 1 ;
  if (x > width) {
    x = 0
  }
}
