function preload() {

  for ( let x = 0; x < c; x++ ) {
    imagenes[x] = loadImage("data/imagen"+x+".png");
    imagenes[x].resize(10, 10);
    //for( let y = 0 ; y < 6 ; y++ )
    texto = loadStrings("data/texto.txt");
    for ( let y = 0; y < 12; y++ ) {
    }
  }
}
function pantallajugando() {
  imagenes[0].resize(70, 70);  // Ajusta nuevoAncho y nuevoAlto según tus necesidades
  imagenes[3].resize(70, 70);
  imagenes[9].resize(70, 70);
  imagenes[1].resize(70, 70);

  //auto blanco
  posX[0]+= velocidad[1];
  if (posX[0] > width) {
    posX[0] = -imagenes[0].width;
  }
  image(imagenes[0], posX[0], posY[0]);
  //autoverde
  posX[2]-=  velocidad[1];
  if (posX[2] < -imagenes[9].width) {
    posX[2] = width;
  }
  image(imagenes[9], posX[2], posY[2]);
  //autorosa
  posX[3]+= velocidad[1];
  if (posX[3] > width) {
    posX[3] = -imagenes[1].width;
  }
  image(imagenes[1], posX[3], posY[3]);

  //autorojo
  posX[4]-= velocidad[1];
  if ( posX[4] < -imagenes[3].width) {
    posX[4] = width;
  }
  image(imagenes[3], posX[4], posY[4]);
  

//rana
  if (keyIsPressed===false) {
    imagenes[5].resize(60, 60);
    image(imagenes[5], posX[1], posY[1] );
  } else {
    if (keyCode === UP_ARROW) {
      posY[1] -=  velocidad[1];
      image(imagenes[5], posX[1], posY[1]);
    } else if (keyCode === DOWN_ARROW) {
      posY[1] +=  velocidad[1];
      imagenes[6].resize(60, 60);
      image(imagenes[6], posX[1], posY[1]);
    } else if (keyCode === LEFT_ARROW) {
      posX[1] -=  velocidad[1];
      imagenes[7].resize(60, 60);
      image(imagenes[7], posX[1], posY[1]);
    } else if (keyCode === RIGHT_ARROW) {
      posX[1] += velocidad[1];
      imagenes[8].resize(60, 60);
      image(imagenes[8], posX[1], posY[1]);
    }
  }
  posX[1] = constrain(posX[1], 0, width - imagenes[5].width);
  posY[1] = constrain( posY[1], 0, height - imagenes[5].height);

  if (
    posX[1] +ancho[1]  > posX[2] &&
    posX[1] < posX[2]+ancho[2] &&
    posY[1] + alto[1]>posY[2] &&
    posY[1]< posY[2] + alto[2]
    )
  {
    estado= 2;
  }

  if
    (posX[1] +ancho[1]  > posX[0] &&
    posX[1] < posX[0] + ancho[0] &&
    posY[1] + alto[1]>posY[0] &&
    posY[1] < posY[0] +alto[0])
  {
    estado= 2;
  }
  if
    (posX[1] +ancho[1]  > posX[3] &&
    posX[1] < posX[3] + ancho[3] &&
    posY[1] + alto[1]>posY[3] &&
    posY[1] < posY[3] +alto[3])
  {
    estado= 2;
  }
  if
    (posX[1] +ancho[1]  > posX[4] &&
    posX[1] < posX[4] + ancho[4] &&
    posY[1] + alto[1]>posY[4] &&
    posY[1] < posY[4] +alto[4])
  {
    estado= 2;
  }
  if ( posY[1] <= 0 ) {
    estado = 3;
  }
}

function time() {
  if (jugando) {
    tiempo += deltaTime / 1000;
    let tiempoRestante = duracion - tiempo;
    if (tiempoRestante <= 0) {
      estado= 2;
      jugando= false;
    }
    fill(0);
    textSize(30);

    let tiempoFormateado = nf(tiempoRestante, 1, 1);
    text( "tiempo: " + tiempoFormateado, 5, 50);
  } else {
    estado= 2;
  }
}
