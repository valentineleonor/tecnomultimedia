let p = []; // arreglo de imagenes
let texto = [];
let aventura, objJuego, objContador;

function setup() {
  createCanvas(500, 500);
  aventura = new Aventura();
  objJuego = new Juego();
  objContador = new Contador();
}

function draw() {
  aventura.dibujar();
  objJuego.dibujar();
  objContador.dibujar();
  objContador.incrementarTiempo();
  objContador.llegoLimite();
}

function mousePressed() {
  aventura.click();
  objJuego.click();
}

function keyPressed() {
  aventura.pasaje();
}

function preload() {
  for (let i = 0; i < 26; i++) {
    p[i] = loadImage('data/p' + i + '.png');
  }

  for (let x = 0; x < 18; x++) {
    texto = loadStrings('data/texto.txt');
  }
}
