var kittenPic ;



function setup() {
  // put setup code here
  createCanvas(800,800) ;
  kittenPic = loadImage("assets/kittenimg.jpeg") ;
}

function draw() {
  // put drawing code here
  image(kittenPic, 20, 100) ;
}
