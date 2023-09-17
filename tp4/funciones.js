function juego () {
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
