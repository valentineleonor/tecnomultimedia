class Aventura {
  constructor () {
    this.pantallas =[]
    this.pantallas[1] = new UnBoton(p[1], );
    this.pantallas[2] = new UnBoton(p[2], texto1);
    this.pantallas[3] = new UnBoton(p[3], texto2, );
    this.pantallas[4] = new DosBotones(p[4], texto3, 1, 3);
    this.pantallas[5] = new UnBoton(p[5], texto4, );
    this.pantallas[6] = new UnBoton(p[13], texto5, );
    this.pantallas[7] = new juego ;
    this.pantallas[8] = // gana;
      this.pantallas[9] = new DosBotones(p[9], texto[8], 1, 3); //los atrapan
    this.pantallas[13] = new UnBoton(p[15], texto14, );
    this.pantallas[14] = new UnBoton(p[19], texto15, );
    this.pantallas[10] = new UnBoton(p[22], texto9, );
    this.pantallas[11] = new UnBoton(p[14], texto13, );
    this.pantallas[12] = new UnBoton(p[23], texto10, );
    this.pantallas[15] = new UnBoton(p[24], texto23, text24, );//creditos
    this.pantalaActual=1;
 
    this.UnBoton = new UnBoton;
    this.DosBotones= new DosBotones;
    
    
  }
   dibujar(){
    this.pantallas[this.pantallaActual].dibujar()
  }
  
  click(){
    this.pantallas[this.pantallaActual].click()
  }

}
