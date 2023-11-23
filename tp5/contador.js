class Contador {
  constructor() {
    this.cantidad = 0;
    this.tiempo = 0;
    this.tiempoLimite = 20;
  }

  dibujar(){
    fill(646464);
    textSize(20);
    text( "Tiempo: "+ this.tiempo, 400, 30 );
   
    this.incrementarTiempo();
  }
 
  incrementarTiempo(){
    if(frameCount%60 == 0){
      this.tiempo++;
    }
  }
 
  llegoLimite(){
    return this.tiempo >= this.tiempoLimite;
  }
}
