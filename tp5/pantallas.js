class Pantallas {
  constructor() {
    this.estado = "menu";
    this.menu = loadImage('data/inicio.jpg');
    this.perd = loadImage('data/perder.jpg');
    this.ganarImagen = loadImage('data/ganar.jpg');
  }

  display() {
    if (this.estado == "menu") {
      image(this.menu, 0, 0, 500, 500);
    } else {
      if (this.estado == "perdiste") {
        image(this.perd, 0, 0, 500, 500);
      } else if (this.estado == "ganar") {
        image(this.ganarImagen, 0, 0, 500, 500);
      }
    }
  }

  click(x_, y_) {
    if (this.estado == "menu") {
      if (dist(x_, y_, 250, 200) < 40) {
        this.estado = "inicio";
      }
    }
    if (this.estado == "perdiste") {
      if (dist(x_, y_, 0, 0) < 30) {
        this.estado = "menu";
      }
    }
  }

  getEstado() {
    return this.estado;
  }

  activarGanar() {
    this.estado = "ganar";
  }

  perdiste() {
    this.estado = "perdiste";
  }
}
