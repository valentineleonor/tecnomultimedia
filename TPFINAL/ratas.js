class Ratas {
  constructor() {
    this.posX = -10;
    this.posY = 90;
    this.imagen = loadImage('data/rata1.png');
   
  }

  dibujar() {
       
    image(this.imagen, this.posX, this.posY, 40,40);
    this.posX=this.posX+2;
    if(this.posX == 510){
     this.posX =-10;
    }  
  }
 
 
  getPosX(){
   return this.posX;
  }
 
  getPosY(){
    return this.posY;
  }  
   
 
 
}
