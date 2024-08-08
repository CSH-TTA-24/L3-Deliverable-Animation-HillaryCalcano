let xPos = 250;
let yPos = 0

let r;
let g;
let b;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
background(0, 20);

  fill(r,g,b)

  ellipse(xPos, yPos, 50, 50);

  yPos += 3;

  if (yPos > 525) {
  yPos = -25;
}
}

function mouseClicked(){
r = random(0,255)
g = random(0,255)
b = random (0,255)

fill(r,g,b)

if (mouseClicked){
yPos = -25
}
}




