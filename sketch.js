

function setup() {
  createCanvas(400, 340);
  noLoop(); // Ensures the draw function runs only once
}

function draw() {
  
  background(0);

  for (let y = 19; y <= height; y += 30) { // Vertical spacing
    for (let x = 12; x <= width; x += 20) { // Horizontal spacing
      let gradientValue = map(x, 12, width, 0, 330); // Horizontal gradient
      
      // Halftone effect: size decreases towards top and bottom
      let distanceFromCenter = abs(y - height / 2);
      let size = map(distanceFromCenter, 0, height / 2, 25, 5); // Larger in the center, smaller at edges
      
      fill(gradientValue, 100, 255); // Gradient color
      noStroke();
      ellipse(x, y, size, size); // Circle size

      //
      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(125)); // Rotate 45 degrees (diagonal)
      fill(210, 174, 232);
      ellipse(-15, -110, 150, 40);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(135)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(-45, -130, 150, 40);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(115)); // Rotate 45 degrees (diagonal)
      fill(210, 174, 232);
      ellipse(125, -140, 90, 30);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(160)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(-85, -150, 180, 70)
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(90)); // Rotate 45 degrees (diagonal)
      fill(210, 174, 232);
      ellipse(145, -220, 120, 30);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(175)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(-170, -130, 109, 95);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(75)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(200, -200, 120, 30);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(105)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(145, -140, 90, 30);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(135)); // Rotate 45 degrees (diagonal)
      fill(252, 199, 237);
      ellipse(-45, -130, 130, 20);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(95, -110, 100, 60);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(255);
      ellipse(-45, -210, 70, 40);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(252, 199, 237);
      ellipse(95, -115, 40, 25);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(245, 125, 235);
      ellipse(95, -115, 20, 25);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(224, 83, 212);
      ellipse(95, -115, 10, 15);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(255, 232, 253);
      ellipse(89, -115, 9, 6);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(119)); // Rotate 45 degrees (diagonal)
      fill(252, 199, 237);
      ellipse(140, -110, 9, 6);
      pop()

      push(); // Save current transformation state
      translate(50, 50); // Move origin to (50, 50)
      rotate(radians(129)); // Rotate 45 degrees (diagonal)
      fill(252, 199, 237);
      ellipse(120, -130, 6, 9);
      pop()
      //flowers
      for (let flower of flowers) {
        animateFlower(flower);
        drawFlower(flower);
      }
    }
  }
}


let flowers = [];

function setup() {
  createCanvas(400, 400);

  // Create 4 flowers in the corners
  flowers.push(createFlower(50, 50)); // Top-left
  flowers.push(createFlower(width - 50, 50)); // Top-right
  flowers.push(createFlower(50, height - 50)); // Bottom-left
  flowers.push(createFlower(width - 50, height - 50)); // Bottom-right
}



function createFlower(x, y) {
  let flower = {
    x: x,
    y: y,
    baseSize: random(20, 50), // Base size of the flower
    oscillation: random(10, 25), // Amplitude of size oscillation
    phase: random(TWO_PI), // Initial phase for smooth oscillation
    color: color(random(255), random(255), random(255)) // Random flower color
  };

  return flower;
}

function animateFlower(flower) {
  // Update the flower's size based on a sine wave
  flower.size = flower.baseSize + sin(frameCount * 0.05 + flower.phase) * flower.oscillation;
}

function drawFlower(flower) {
  noStroke();
  fill(flower.color);

  // Draw petals
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Draw center
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
}