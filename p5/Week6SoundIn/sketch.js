var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

let vol = mic.getLevel();
fill('yellow');
stroke(0);

let h = map(vol, 0, .5, height, 0);
let c = map(vol, 0, 1, 0, 500);
fill(c);
background(c, 0, 0);
ellipse(200, y, 100, 50) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (y > width-200) {
     y = -400 ;
  }
    y++ ;

  }



  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);




// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
