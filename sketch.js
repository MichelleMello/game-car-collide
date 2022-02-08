function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  backToBeggining();
  verifyColision();
  insertPoints();
  markPoints();
}
