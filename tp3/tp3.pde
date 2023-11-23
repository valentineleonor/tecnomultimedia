//ENLACE VIDEO YOUTUBE : https://www.youtube.com/watch?v=X8sBQsS-Y3E
int actualPantalla = 0;
int cant = 24;
PImage  [] pantallas = new PImage[cant];
String [] textos;

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
  
  textAlign(LEFT, TOP);// ALINEACION TEXTO
  textSize (20); // ACA SE DIBUJA EL TEXTO Y TAMAÑO
  fill(0);
  //text(textos[pantalla], 49, 49, 500, 400);
  text(textos[pantalla], 51, 51, 500, 400);
  fill (255); 
  text(textos[pantalla], 50, 50, 500, 400);
  //text(pantalla, 100, 50);

  if (actualPantalla == 0) {
    drawBotonCircular(250, 200, 100, 50, "Inicio");
    drawBotonCircular (250, 400, 100, 50, "Creditos");
  }
  else if (esAB(actualPantalla)) { //pantallas con botones a y b 
    drawBoton(50, 500, 100, 50, "A"); // (X, W, Y, H)  mx > X && mx < X+W && my > Y && my < Y+H
    drawBoton(450, 500, 100, 50, "B");
  }
  else if (actualPantalla == 23) {
    drawBoton(250, 500, 100, 50, "Reinciar");
    textAlign(CENTER);
    text ("CREDITOS",300,50);
    fill(#9FF2F0);
    textSize (30);
    text ("Directora: valentina leonor cuatrini", 300,200);
    text("Programadora valentina leonor cuatrini", 300,300);
    text(" Artista GradeSaver" , 300,400); 
     text(" Legajo 94744" , 300,500); 
  

  }
}
void mouseClicked() { //detectar si se hizo click dentro del boton
  if (actualPantalla == 0) {
    // Botón "Inicio"
    if (dist(mouseX, mouseY, 250, 200) <50) {
      println("Clic en el botón Inicio");
    }
    // Botón "Créditos"
    else if (dist(mouseX, mouseY, 250,400) < 50) {
      println("Clic en el botón Créditos");
    }
  }
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
    if (clickA(mouseX, mouseY)) {
      actualPantalla = 4; //BOTON QUE VA A LA HISTORIA A
    }
    if (clickB(mouseX, mouseY)) {
      actualPantalla = 14; // HISTORIA B O´BRIAN
    }
  } else if (actualPantalla == 4) {
    actualPantalla = 5;
  } else if (actualPantalla == 5) {
    //HISTORIA JULIA A
    if (clickA(mouseX, mouseY)) {
      actualPantalla = 6;
    }
    //HISTORIA JULIA AB
    if (clickB(mouseX, mouseY)) {
      actualPantalla = 8;
    }
  } else if (actualPantalla == 6) {
    actualPantalla = 7;
  } else if (actualPantalla == 7) {
    actualPantalla = 23;
  } else if (actualPantalla == 8) {
    actualPantalla = 9;
    //HISTORIA JULIA ABA
  } else if (actualPantalla == 9) {
    if (clickB(mouseX, mouseY)) {
      actualPantalla = 12 ; //BOTON ABA
    }
    if (clickA(mouseX, mouseY)) {
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
    if (clickB(mouseX, mouseY)) {
      actualPantalla = 16 ; //BOTON B
    }
    if (clickA(mouseX, mouseY)) {
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
