PImage imagen;
int cantidad = 19;

void setup () {
  size (800, 400) ;
  // cargar imagen
  imagen = loadImage("tp2.jpg");
}

void draw() {
  background(255);
  image(imagen, 0, 0, 400, 400);
  
  //nombre de funcion
  opart(300);
  
}

// calcularBorde recibe el tamano y la cantidad de circulos, y divide el tamano por la cantidad, para que todos los circulos tengan el mismo grosor.
float calcularBorde(float size, int cantidad){
   return size/cantidad;
}

//esta funcion recibe el tamano del circulo mas grande y los dibuja, lo remplaza facilitando la escritura del codigo
void opart(float size){
 
  // calculo la diferencia entre circulos
  float borde = calcularBorde(size, cantidad);
  boolean negro = true;
  
  noStroke();
  
  //recorroo la cantidad de circulos
  for (int i = 0; i < cantidad; i++) {
    // calculo el tamano los circulos
    float tamano = size - borde * i;
    
    //normalizo el valor del tamano divisiendo por 300 para tener un valor entre 0 y 1
    float movimiento = tamano/size;
    
    //vario el color para que se vayan intercalando negro y blanco
    if (negro) {
      fill(0);
    } else {
      fill(255);
    }
    //niego la variable 
    negro = !negro;
    
    //se calcula de 600 que es el centro del circulo la diferencia (resta) con el mouse y divido por 200 que es el ancho de la zona del circulo y 
    //lo divido por el tamaño que es 200 para tener u n valor. cuando con el mouse pasa por el centor no modifica nada, cuando lo mismo    
    float movMouseX = (mouseX-600.0)/200;
    float movMouseY = (mouseY-200.0)/200;
    
    // desplazamiento los circulos hacia los bordes
    float modX = (size-tamano)/2 * movimiento * movMouseX;
    float modY = (size-tamano)/2 * movimiento * movMouseY;
    
    ellipse(600+modX, 200+modY, tamano, tamano);
  } 
}
  


//reseto la cantidad de circulos
void mousePressed() {
  cantidad = 19;
}

// cuando apreto una tecla randomizo la cantidad de circulos 
void keyPressed() {
  cantidad = int(random(8, 100));
}
