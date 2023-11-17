class Policia{
  constructor(x_) {
    this.posX = x_;
    this.posY = 190;
    this.imagen = loadImage('data/policia.png');
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 40, 50);
    this.posX--;
    if(this.posX == -10){
     this.posX =510;
    }  
  }
 
 
   getPosX(){
   return this.posX;
  }
 
  getPosY(){
    return this.posY;
  }  
 
}
