let xCar = [600, 600, 600, 600, 600, 600]
let yCar = [40, 96, 148, 210, 270, 318];
let speedCar = [2, 2.5, 3.2, 5, 3.3, 2.3];
let widthCar = 50;
let heightCar = 40;

//funções
function showCar(){
  for (let i = 0; i < imageCars.length; i++){
    image(imageCars[i], xCar[i], yCar[i], widthCar, heightCar);
  }
}

function moveCar(){
  for (let i = 0; i < imageCars.length; i++){
    xCar[i] -= speedCar[i];
  }
}

function backToBeggining (){  
  for (let i = 0; i < imageCars.length; i++){
    if (passScreen(xCar[i])){
      xCar[i] = 600;
    }
  }
}

function passScreen (xCar){
  return xCar < -50;
}