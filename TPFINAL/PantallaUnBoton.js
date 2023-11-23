class PantallaUnBoton {
  constructor() {
    this.boton = new Boton(p[27]);
  }

  dibujar() {
    image(p[27], 0, 0);
    this.boton.dibujar();
  }

  click() {
    this.boton.click();
  }
}
