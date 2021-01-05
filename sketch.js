function setup() {
  createCanvas(windowWidth, windowHeight);
  dropdown = createSelect();
  dropdown.option('BLUE');
  dropdown.option('RED');
  dropdown.option('GREEN');
  
}



function draw() {
  background(220);
  let val = dropdown.value();
  if (val == 'BLUE') {
    background(0, 0, 255);
  } else if (val == 'RED') {
    background(255,0,0);
  } else if (val == 'GREEN') {
    background(0,255,0);
  }
}
