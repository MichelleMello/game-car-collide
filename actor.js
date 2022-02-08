//variáveis para o personagem
let yActor = 366;
let xActor = 230;
var hit = false;

//pontos
let myPoints = 0;


//funções
function showActor(){
  image(imageActor, xActor, yActor, 30, 30);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(canMove()){
      yActor += 3;
    }    
  }
   if (keyIsDown(RIGHT_ARROW)) {
    xActor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 3;
  }
}

function verifyColision() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for (let i = 0; i < imageCars.length; i++){
     collide = collideRectCircle(xCar[i], yCar[i], widthCar, heightCar, xActor, yActor, 10);
     if (collide){
       backToInitial();
       soundCollide.play();
     if (biggetThanZeroPoints()){
       myPoints -= 1;
       }
     }
   }
}

function backToInitial(){
  yActor = 366;
}

function insertPoints() {
  textAlign(CENTER);
  fill(color(50,229,250));
  textSize(25);
  text(myPoints, width / 2, 27);
}

function markPoints(){
  if (yActor < 27){
    myPoints += 1;
    backToInitial();
    soundPoint.play();
  }
}

function biggetThanZeroPoints(){
  return myPoints > 0;
}

function canMove() {
  return yActor < 366;
}