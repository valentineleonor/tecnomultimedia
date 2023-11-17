class Camara{
  constructor(x_) {
    this.posX = x_;
    this.posY = 270;
    this.imagen = loadImage('data/camara.png');
   
  }

  dibujar() {

    image(this.imagen, this.posX, this.posY, 55, 55);
    this.posX++;
    if (this.posX == 510) {
      this.posX =-10;
    }
  }


  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }
}
