// Simulando a segunda lei de Newton
//F = m*a
//Parte 1

let bola;

function setup() {
  createCanvas(400, 400);
  bola = new Bolinha(200,200);
}

function draw() {
  background(220);
  bola.exibir();
}