class Personaje {
  constructor() {
    this.posX = width / 2 - 25;
    this.posY = height - 50;
    this.imagen = loadImage('data/personaje.png');
    this.vida = 3;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 80, 80);
 
  }
 
 
  colision(x_, y_){
   
    if(dist(x_, y_, this.posX, this.posY) < 30){
       this.posX = width / 2 - 25;
       this.posY = height - 50;
       this.vida--;
    }
   
  }  
 
 
 vidas(){
  return this.vida;
 }  
 
  moverDerecha() {
    if(this.posX < 440){
    this.posX+=10;}
  }

  moverIzquierda() {
     if(this.posX > 0){
    this.posX-=10;}
  }
  moverArriba () {
     if(this.posY > 0){
    this.posY-=10;}
  }
  moverAbajo () {
     if(this.posY < 440){
    this.posY+=10;}
  }

  teclaPresionada() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.moverDerecha();
      } else if (keyCode == LEFT_ARROW) {
        this.moverIzquierda();
      } else if (keyCode ==UP_ARROW) {
        this.moverArriba();
      } else if (keyCode ==DOWN_ARROW) {
        this.moverAbajo();
      }
    }
   
    }
    getPosY() {
    return this.posY;
  }
}
