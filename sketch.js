let palette = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
  "brown",
  "white",
  "black",
];

let currentColor = palette[0];

//Sets up the canvas and paint palette boxes
function setup() {
  createCanvas(1600, 900);

  for (let i = 0; i < palette.length; i++) {
    push();
    fill(palette[i]);
    noStroke();
    rect(0, i * 40 + i, 40, 40);
    pop();
  }
}

//Checks the position of the mouse to make sure it is not painting over a pallette box, if not it paints
function draw() {
  if (mouseIsPressed) {
    if (mouseX > 45 && mouseY > palette.length * 1) {
      stroke(currentColor);
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

//Checks to see if the user has clicked on a pallette box
function mousePressed() {
  let x = 0;
  let y = 0;
  let w = 40;
  let h = 40;

  for (let i = 0; i < palette.length; i++) {
    if (
      mouseX >= x &&
      mouseX < x + w &&
      mouseY >= y + i * (h + 1) &&
      mouseY < y + i * (h + 1) + h
    ) {
      currentColor = palette[i];
      break;
    }
  }
}
