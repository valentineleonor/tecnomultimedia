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

    this.UnBoton = new UnBoton ();
    this.DosBotones= new DosBotones();
  }
  dibujar() {
    this.pantallas[this.pantallaActual].dibujar()
      if (this.pantallaActual == 1) {
      image(imgArray[1], 0, 0);
    } else {
      if (this.pantallaActual == 2) {
        image(imgArray [2], 0, 0);
        this.PantallaUnBoton(imgArray[27], 100, 200)
          text (textos[1], 10, 100, 300);
      } else if (this.estado == 3) {
        image(imgArray[3], 0, 0);
        this.PantallaUnBoton(imgArray[27], 100, 200);
        text (textos[2]);
      } else if (this.estado == 4) {
        image(imgArray [4], 0, 0);
        this.PantallaDosBotones(imgArray[25], 100, 200, imgArray [26], 300, 400)
          text (textos[3], 10, 100, 300);
      } else if (this.estado == 5) {
        image(imgArray [4], 0, 0);
        this.PantallaUnBoton(imgArray[27], 100, 200)
          text (textos[4], 10, 100, 300);
      } else if (this.estado == 6) {
        image(imgArray [13], 0, 0);
        this.PantallaUnBoton(imgArray[27], 100, 200)
          text (textos[5], 10, 100, 300);
      }
      //else {
      //    if (this.estado == 7){ //juego
    } else if (this.estado == 8) {//gana juego puede ir a creditos
      image(imgArray[ 8], 0, 0);
      this.PantallaUnBoton(imgArray[27], 100, 200)
        text (textos[7], 10, 100, 300);
    } else if (this.estado == 9) {
      image(imgArray[ 9], 0, 0);
      this.PantallaUnBoton(imgArray[27], 100, 200)
        text (textos[8], 10, 100, 300);
    } else if (this.estado == 10) {
      image(imgArray[ 22], 0, 0);
      this.PantallaDosBotones(imgArray[2], 100, 200, imgArray [26]300, 400)
        text (textos[9], 10, 100, 300);
    } else if (this.estado == 11) {///puede ir a creditos
      image(imgArray[ 14], 0, 0);
      this.PantallaUnBoton(imgArray[27], 100, 200)
        text (textos[13], 10, 100, 300);
    } else if (this.estado == 12) { //puede ir a creditos
      image(imgArray[ 23], 0, 0);
      this.PantallaUnBoton(imgArray[27], 100, 200)
        text (textos[10], 10, 100, 300);

      click(x_, y_) {
        if (this.pantalla actual==1) {
          if (dist(x_, y_, 250, 200) < 40) {
           
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
  }

  click() {
    this.pantallas[this.pantallaActual].click()
  }
}
