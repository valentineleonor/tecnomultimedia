class juego {
  constructor() {
    this.fondo = loadImage('data/fondo.jpg');
    this.ve = [];
    this.veC = [];
    for (this.i = 0; this.i < 3; this.i++) {
      this.ve[this.i] = new Policia(150 * this.i);
      this.veC[this.i] = new Camara(200 * this.i);
    }
    this.objPersonaje = new Personaje();
    this.objRatas = new Ratas();
    this.objPantallas = new Pantallas();
  }

  dibujar() {
    this.objPantallas.display();

    if (this.objPantallas.getEstado() == "inicio") {
      //fondo
      image(this.fondo, 0, 0, 500, 500);
      ///

      text("Vidas:", 10, 20);
      text(this.objPersonaje.vidas(), 73, 20);
      if (this.objPersonaje.vidas() == 0) {
        this.objPantallas.perdiste();
      }
      for (this.i = 0; this.i < 3; this.i++) {
        this.ve[this.i].dibujar();
        this.veC[this.i].dibujar();
        this.objPersonaje.colision(this.ve[this.i].getPosX(), this.ve[this.i].getPosY());
        this.objPersonaje.colision(this.veC[this.i].getPosX(), this.veC[this.i].getPosY());
      }
      this.objPersonaje.colision(this.objRatas.getPosX(), this.objRatas.getPosY());
      this.objRatas.dibujar();
      // Personaje
      this.objPersonaje.dibujar();
      this.objPersonaje.teclaPresionada();
    }

    // Verificar si el personaje llegó a la zona superior sin perder vidas
    if (this.objPersonaje.vidas() > 0 && this.objPersonaje.getPosY() <= 0) {
      this.objPantallas.activarGanar();
    }
  }

  click() {
    this.objPantallas.click(mouseX, mouseY);
  }
}
