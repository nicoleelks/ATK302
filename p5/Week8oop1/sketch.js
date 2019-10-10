var myCar1; // declare it
var myCar2; // declare it
var myCar3; // declare it

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar1 = new Car(); //spawn 1 car
  myCar2 = new Car(); //spawn 1 car
  myCar3 = new Car(); //spawn 1 car
}

function draw() {
  // put drawing code here
  background(100);

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();

  myCar3.display();
  myCar3.drive();


}

function Car() {
  // attributes
  this.x = random(width);
  this.y = random(height);
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;
  this.vel = random(5, 10) ;


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b) ;
    rect(this.x, this.y, 100, 50, 50);
  }

  this.drive = function() {
  this.x = this.x + 5 ;
  if (this.x > width) {
    this.x = 0 ;
    this.r = random(255) ;
  }
  }

}
