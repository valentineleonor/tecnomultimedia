class PantallaDosBotones {
  constructor() {
    this.boton1 = new Boton(p[25]);
    this.boton2 = new Boton(p[26]);
  }

  dibujar() {
    image(p[27], 0, 0);
   
    this.boton1.dibujar();
    this.boton2.dibujar();
  }

  click() {
    this.boton1.click();
    this.boton2.click();
  }
}
