function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
  
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(random(255),random(255),random(255),random(0,150));
    } else {
      
      fill(255,255,255,random(0,150));
    }
    size = random (300);
    ellipse(mouseX, mouseY, size, size);
  }
  
  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
      background(255);
    }
  
