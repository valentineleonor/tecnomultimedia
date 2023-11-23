boolean esAB(int actualPantalla){
   return actualPantalla == 3 || actualPantalla == 5 || actualPantalla == 9 || actualPantalla == 15;
}

boolean clickA(int mouseX, int mouseY){
   return mouseX > 50 && mouseX < 150 && mouseY > 500 && mouseY < 550;
}

boolean clickB(int mouseX, int mouseY){
   return mouseX > 450 && mouseX < 550 && mouseY > 500 && mouseY < 550;
}

void drawBoton(int x, int y, int w, int h, String txt) {
  fill(0); // BOTON
  rect(x, y, w, h);
  fill(255); //LETRA
  textSize (20);
  textAlign(CENTER, CENTER);
  text(txt, x, y, w, h);
}
void drawBotonCircular(int x, int y, int w, int h, String txt) {
  fill(0); // BOTON
  ellipse(x+w/2, y+h/2, w, h);
  fill(255); //LETRA
  textSize (20);
  textAlign(CENTER, CENTER);
  text(txt, x, y, w, h);
}
