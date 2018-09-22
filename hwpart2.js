function setup() {
    createCanvas(400, 400);
}

var y = 10
var x = 10;
var changeInX = 3;
var changeInY = 5;

function draw() {
    background(220);
		colorMode(HSB, 400, 400, 100);
		var c = color(x,x,100);
		fill(c);
    ellipse(x, 200, 40);

    x = x + changeInX;

    if (x > width) {
        changeInX = -3;
    }

    if (x < 0) {
        changeInX = 3;
    }
  
      ellipse(200, y, 40);

    y = y + changeInY;

    if (y > width) {
        changeInY = -3;
    }

    if (y < 0) {
        changeInY = 3;
    }
}
