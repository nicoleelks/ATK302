var song1;


fuction preload() {
  song1 = loadSound('assets/goodsong.mp3') ;
}

function setup() {
  // put setup code here
  createCanvas(720,200) ;
  background(255, 0, 0) ;
  song1.play();
}

function draw() {
  // put drawing code here
}

function mouseReleased() {
  song1.stop();
}
