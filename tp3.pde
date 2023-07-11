int actualPantalla = 0;
int cant = 24;
PImage  [] pantallas = new PImage[cant];
String [] textos;

//String [] archivos = {1};


void setup () {
  size (600, 600) ;
  for (int i=0; i<cant; i++) {
    pantallas[i] = loadImage("pantallas/"+ (i+1) + ".jpg");
  }
  textos = loadStrings("textos.txt");
}
void draw () {
  pantalla(actualPantalla);
}

void pantalla(int pantalla) {

  image(pantallas[pantalla], 0, 0, 600, 600);
  textSize (60); // ACA SE DIBUJA EL TEXTO Y TAMAÑO
  text(textos[pantalla], 100, 100);
  text(pantalla, 100, 50);

  if (actualPantalla == 0) {
    drawBoton(250, 200, 100, 50, "Inicio");
    drawBoton(250, 400, 100, 50, "Creditos");
  }
  if (actualPantalla == 3) {
    drawBoton(50, 500, 100, 50, "A"); // (X, W, Y, H)  mx > X && mx < X+W && my > Y && my < Y+H
    drawBoton(450, 500, 100, 50, "B");
  }
  if (actualPantalla == 5) { //HISTORIA JULIA
    drawBoton(50, 500, 100, 50, "A"); // (X, W, Y, H)  mx > X && mx < X+W && my > Y && my < Y+H
    drawBoton(450, 500, 100, 50, "B");
    //JULIA VERSION A
  }
  if (actualPantalla == 9) { //HISTORIA JULIA AB
    drawBoton(50, 500, 100, 50, "A"); // (X, W, Y, H)  mx > X && mx < X+W && my > Y && my < Y+H
    drawBoton(450, 500, 100, 50, "B");
  }
  //HISTORIA O´BRIAN
  if (actualPantalla == 15) {
    drawBoton(50, 500, 100, 50, "A"); // (X, W, Y, H)  mx > X && mx < X+W && my > Y && my < Y+H
    drawBoton(450, 500, 100, 50, "B");
  }

  if (actualPantalla == 23) {
    drawBoton(250, 500, 100, 50, "Reinciar");
  }
}

void drawBoton(int x, int y, int w, int h, String txt) {
  fill(0); // BOTON
  rect(x, y, w, h);
  fill(255); //LETRA
  textSize (20);
  textAlign(CENTER, CENTER);
  text(txt, x, y, w, h);
}

void mousePressed() {

  if (actualPantalla == 0) {
    if (mouseX>250 && mouseX < 350 && mouseY > 200 && mouseY < 250) {
      actualPantalla = 1;
    } else if (mouseX>250 && mouseX < 350 && mouseY > 400 && mouseY < 450) {
      actualPantalla = 23;
    }
  } else if (actualPantalla == 1) {
    actualPantalla = 2;
  } else if (actualPantalla == 2) {
    actualPantalla = 3;
  } else if (actualPantalla == 3) {
    // BOTON A JULIA
    if (mouseX>50 && mouseX < 150 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 4; //BOTON QUE VA A LA HISTORIA A
    }

    if (mouseX>450 && mouseX < 550 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 14; // HISTORIA B O´BRIAN
    }
  } else if (actualPantalla == 4) {
    actualPantalla = 5;
  } else if (actualPantalla == 5) {
    //HISTORIA JULIA A
    if (mouseX>50 && mouseX < 150 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 6;
    }
    //HISTORIA JULIA AB
    if (mouseX>450 && mouseX < 550 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 8;
    }
  } else if (actualPantalla == 6) {
    actualPantalla = 8;
  } else if (actualPantalla == 7) {
    actualPantalla = 23;
  } else if (actualPantalla == 8) {
    actualPantalla = 9;
    //HISTORIA JULIA ABA
  } else if (actualPantalla == 9) {

    if (mouseX>450 && mouseX < 550 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 12 ; //BOTON ABA
    }
    if (mouseX>50 && mouseX < 150 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 10; //BOTON ABB
    }
  } else if (actualPantalla == 10) {
    actualPantalla = 11;
  } else if (actualPantalla == 11) {
    actualPantalla = 12;
  } else if (actualPantalla == 12) {
    actualPantalla = 13;
  } else if (actualPantalla == 13) {
    actualPantalla = 23;
  }
  // HISTORIA OBRIAN HISTORIA B
  else if (actualPantalla == 14) {
    actualPantalla = 15;
  } else if (actualPantalla == 15) {
    if (mouseX>450 && mouseX < 550 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 16 ; //BOTON B
    }
    if (mouseX>50 && mouseX < 150 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 18; //BOTON A
    }
  } else if (actualPantalla == 16) {
    actualPantalla = 17;
  } else if (actualPantalla == 17) {
    actualPantalla = 23;
  }
  //OPCION A
  else if (actualPantalla == 15) {
    actualPantalla = 18;
  } else if (actualPantalla == 18) {
    actualPantalla = 19;
  } else if (actualPantalla == 19) {
    actualPantalla = 20;
  } else if (actualPantalla == 20) {
    actualPantalla = 21;
  } else if (actualPantalla == 21) {
    actualPantalla = 22;
  } else if (actualPantalla == 22) {
    actualPantalla = 23;
  }
  //final
  else if (actualPantalla == 23) {
    if (mouseX>250 && mouseX < 350 && mouseY > 500 && mouseY < 550) {
      actualPantalla = 0;
    }
  }
}
