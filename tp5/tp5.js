// https://youtu.be/CrCBJOTZD_A valentina cuatrini
let   objJuego, objContador;

function setup() {
  createCanvas(500, 500);
  objJuego = new juego();

  objContador = new Contador ();


}

function draw() {
 
  objJuego.dibujar();

   objContador.dibujar ();
   objContador.incrementarTiempo();
   objContador.llegoLimite();

}

function mousePressed(){
 objJuego.click();
}  
