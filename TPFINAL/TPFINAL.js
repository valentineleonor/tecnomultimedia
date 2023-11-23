let aventur;

function setup() {
createCanvas(500, 500);
aventur = new Aventura();
}


function draw() {
aventur.dibujar();
}


function mousePressed() {
  aventur.click();
  //objJuego.click();
} 
