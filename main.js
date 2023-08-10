let colorlist = ['black', 'white']

function setup() {
  createCanvas(400, 400);
  background(0, 255);
}
textSize(32);
text('TOTAL CHAOS', 10, 30);

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(200, 200, 400, 400);
  
  textSize(32);
  fill(255, 0, 0)
  text('TOTAL CHAOS', 85, 50);
}
