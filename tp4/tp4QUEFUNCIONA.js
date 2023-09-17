// video youtube : https://youtu.be/tgK27JJxZ_F
let portada;
let autos = [];
let rana;
let fondo2;
let pierde;
let cantAutos = 2;
let posYAutos = [275, 250, 200]; // Alturas de las líneas de autitos
let posXAutos = [];
let velocidadAutos = 0.25; // Velocidad de los autitos
let tortuga = [];
let tronkito = [];
let cantTronkito = 2;
let cantTortuga = 2;
let posYTronkito = [55, 80, 100]; // Alturas de los troncos
let posYTortuga = [130, 140, 150]; // Altura de las tortugas
let posXTronkito = [];
let posXTortuga = [];
let velocidadTronkito = 0.2;
let velocidadTortuga = 0.25;
let contador = 0;
let tiempo = 0;
let tiempoInicial = 0;
let estaActivo = false;
let pantallaActual = 'portada'; // Variable para controlar la pantalla actual
let creditos;
let perder;
let gana;

function preload() {
  fondo2 = loadImage('data/fondo2.jpg');
  portada = loadImage('data/portada.png');
  creditos = loadImage('data/creditos.jpg');
  rana = loadImage('data/rana.png');
  perder= loadImage ('data/perder.jpg');
  gana = loadImage('data/gana.jpg');

  // Cargar imágenes de autos
  for (let i = 0; i < cantAutos; i++) {
    autos[i] = loadImage('data/auto' + (i + 1) + '.png');
    posXAutos[i] = -250 + i * 200;
  }

  // Cargar imágenes de troncos
  for (let i = 0; i < cantTronkito; i++) {
    tronkito[i] = loadImage('data/tronkito.png');
    posXTronkito[i] = width + i * 300;
  }

  // Cargar imágenes de tortugas
  for (let i = 0; i < cantTortuga; i++) {
    tortuga[i] = loadImage('data/tortuga.png');
    posXTortuga[i] = -100 - i * 250;
  }
}

// Coordenadas iniciales de la ranita
let ranaX;
let ranaY;
// Coordenadas y dimensiones del botón de reinicio
let botonX = 300;
let botonY = 10;
let botonAncho = 80;
let botonAlto = 30;

function setup() {
  createCanvas(400, 400);
  background(0);
  // Inicializar las coordenadas de la rana en el medio inferior
  ranaX = width / 2 - 25; // Ajusta la posición en X
  ranaY = height - 50; // Ajusta la posición en Y
  //  botón de reinicio
  reiniciarButton = createButton('Reiniciar');
  reiniciarButton.position(width - 120, 20); // esquina arriba derecha
  reiniciarButton.mousePressed(reiniciarJuego);
}

function draw() {
  //PORTADA
  if (pantallaActual == 'portada') {
    image(portada, 0, 0);
    drawBotonCircular(100, 50, 100, 50, "Inicio");
    drawBotonCircular (135, 300, 50, 150, "creditos");
  }
  //JUEGO
  else if (pantallaActual == 'juego') {
    juego();
  }
  //CREDITOS
  else if (pantallaActual == 'creditos') {
    image( creditos, 0, 0);
  }
  //GANA
  else if (pantallaActual == 'pierde'){
    image ( pierde, 0,0)
  }
    function juego() {
  //pantallas
  image(fondo2, 0, 0);
  dibujarAutos();
  function dibujarAutos() {

    for (let y = 0; y < posYAutos.length; y++) {
      for (let i = 0; i < cantAutos; i++) {
        image(autos[i], posXAutos[i], posYAutos[i], 150, 75);
        posXAutos[i] += velocidadAutos;
        if (posXAutos[i] > width) {
          posXAutos[i] = -250 + i * 200;
        }
      }
    }
  }
  //function dibujarTronkis () {
  //dibujar tronkos
  for (let i = 0; i < cantTronkito; i++) {
    image(tronkito[i], posXTronkito[i], posYTronkito[i], 200, 50);
    posXTronkito[i] -= velocidadTronkito;
    if (posXTronkito[i] < -200) {
      posXTronkito[i] = width + i * 300;
    }
  }
}

// dibujar las tortugas
for (let i = 0; i < cantTortuga; i++) {
  image(tortuga[i], posXTortuga[i], posYTortuga[i], 100, 50);
  posXTortuga[i] += velocidadTortuga;
  if (posXTortuga[i] > width) {
    posXTortuga[i] = -100 - i * 250;
  }
}
// Verificar colisión con autos
for (let i = 0; i < cantAutos; i++) {
  let autoX = posXAutos[i];
  let autoY = posYAutos[i];
  if (
    ranaX + 50 > autoX && ranaX < autoX + 150 &&
    ranaY + 50 > autoY && ranaY < autoY + 75
    ) {
    // Colisión con un auto, mover la ranita a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y
  }
}
// Verificar colisión con tronkis
for (let i = 0; i < cantTronkito; i++) {
  let troncoX = posXTronkito[i];
  let troncoY = posYTronkito[i];
  if (
    ranaX + 50 > troncoX && ranaX < troncoX + 200 &&
    ranaY + 50 > troncoY && ranaY < troncoY + 50
    ) {

    // Colisión con un tronco, mover la rana a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y
  }
}

// Verificar colisión con tortugas
for (let i = 0; i < cantTortuga; i++) {
  let tortugaX = posXTortuga[i];
  let tortugaY = posYTortuga[i];
  if (
    ranaX + 50 > tortugaX && ranaX < tortugaX + 100 &&
    ranaY + 50 > tortugaY && ranaY < tortugaY + 50
    ) {
    // Colisión con una tortuga, mover la rana a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y
  }
}
// Verificar colisión con autos
for (let i = 0; i < cantAutos; i++) {
  let autoX = posXAutos[i];
  let autoY = posYAutos[i];
  if (
    ranaX + 50 > autoX && ranaX < autoX + 150 &&
    ranaY + 50 > autoY && ranaY < autoY + 75
    ) {
    // Colisión con un auto, mover la rana a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y

    // Reiniciar el tiempo solo si no está activo
    if (!estaActivo) {
      tiempoInicial = round(millis() / 1000);
      estaActivo = true;
    }
  }
}
// Verificar colisión con troncos
for (let i = 0; i < cantTronkito; i++) {
  let troncoX = posXTronkito[i];
  let troncoY = posYTronkito[i];
  if (
    ranaX + 50 > troncoX && ranaX < troncoX + 200 &&
    ranaY + 50 > troncoY && ranaY < troncoY + 50
    ) {
    // Colisión con un tronco, mover la rana a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y

    // Reiniciar el tiempo
    tiempoInicial = round(millis() / 1000);
    estaActivo = true;
  }
}

// Verificar colisión con tortugas
for (let i = 0; i < cantTortuga; i++) {
  let tortugaX = posXTortuga[i];
  let tortugaY = posYTortuga[i];
  if (
    ranaX + 50 > tortugaX && ranaX < tortugaX + 100 &&
    ranaY + 50 > tortugaY && ranaY < tortugaY + 50
    ) {
    // Colisión con una tortuga, mover la rana a la posición inicial
    ranaX = width / 2 - 25; // Ajusta la posición en X
    ranaY = height - 50; // Ajusta la posición en Y

    // Reiniciar el tiempo
    tiempoInicial = round(millis() / 1000);
    estaActivo = true;
  }
}
// zona segura
if (ranaY <= 0) {
}
// Dibujar la rana en su posición inicial
image(rana, ranaX, ranaY, 50, 50);

// Dibujar el botón de reinicio
fill(0, 255, 0); // Color verde
rect(botonX, botonY, botonAncho, botonAlto);
fill(0); // Texto en negro
textSize(16);
textAlign(CENTER, CENTER);
text('Reiniciar', botonX + botonAncho / 2, botonY + botonAlto / 2);
    }
// Verificar si se hizo clic en el botón de reinicio
if (
  mouseIsPressed &&
  mouseX > botonX &&
  mouseX < botonX + botonAncho &&
  mouseY > botonY &&
  mouseY < botonY + botonAlto
  ) {
  reiniciarJuego();
}
// Tiempo
function Tiempo () {
  fill(255);
  textSize(30);
  text(round(millis() / 1000) - tiempoInicial, 20, 40); // Muestra el tiempo
}
if (estaActivo) {
  tiempo = round(millis() / 1000) - tiempoInicial;
  text(tiempo, 300, 40); // Muestra el tiempo en la esquina
}

function drawBotonCircular( x, y, w, h, txt) {
  fill(0, 255, 0); // BOTON
  fill(255); //LETRA
  textSize (20);
  textAlign(CENTER, CENTER);
  text(txt, x, y, w, h);
}

function reiniciarJuego() {
  tiempoInicial = round(millis() / 1000);
  estaActivo = false; //  detiene el contador de tiempo
  ranaX = width / 2 - 25; // Ajusta la posición en X
  ranaY = height - 50; // Ajusta la posición en Y
}
function mouseClicked() {
  tiempoInicial = round(millis() / 1000);
  estaActivo = true;
  tiempo = 0; // Agrega esta línea para reiniciar el contador de tiempo


  if (dist(mouseX, mouseY, 100, 50) < 50) {
    pantallaActual = 'juego';
  }

  if (dist(mouseX, mouseY, 145, 350) <50) {
    pantallaActual = 'creditos';
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW && ranaX > 0) {
    ranaX -= 10;
  } else if (keyCode === RIGHT_ARROW && ranaX < width - 50) {
    ranaX += 10;
  } else if (keyCode === UP_ARROW && ranaY > 0) {
    ranaY -= 10;
  } else if (keyCode === DOWN_ARROW && ranaY < height - 50) {
    ranaY += 10;
  }
}
