//imagens e sons do jogo
let imageRoad;
let imageActor;
let imageCar;
let imageCar2;
let imageCar3;

let soundtrack;
let soundCollide;
let soundPoint;

function preload(){
  imageRoad = loadImage("images/estrada.png");
  imageActor = loadImage("images/ator-1.png");
  imageCar1 = loadImage("images/carro-1.png");
  imageCar2 = loadImage("images/carro-2.png");
  imageCar3 = loadImage("images/carro-3.png");
  
  soundtrack = loadSound("sound/trilha.mp3");
  soundCollide = loadSound("sound/colidiu.mp3");
  soundPoint = loadSound("sound/pontos.wav");
  
  
  
  imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3];
}