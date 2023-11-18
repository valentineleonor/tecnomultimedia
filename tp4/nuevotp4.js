let c =13;
let imagenes=[], texto= [];
let estado;
let r;
let boton= true;
let posX= [], posY= [], ancho= [], alto= [], velocidad= [];
let a, b, e, d;
let tiempo=0;
let jugando=true;
let duracion=20;
let fl;
function setup() {
  createCanvas(1000, 710);
  estado= 0;
  r= 10;
  fl = color(255, 180, 246);
  posX[0]=10;
  posX[1]=500;
  posX[2]=200;
  posX[3]=480;
  posX[4]=540;

  posY[0]=395;
  posY[1]=600;
  posY[2]=420;
  posY[3]=205;
  posY[4]=105;

  ancho[0]=150;
  ancho[1]=49;
  ancho[2]=300;
  ancho[3]=168;
  ancho[4]=175;

  alto[0]=64;
  alto[1]=49;
  alto[2]=110;
  alto[3]=70;
  alto [4]=57;

  velocidad[0]= 12;
  velocidad[1]=5;
  velocidad[2]=11.5;
  velocidad [3]=14;
  velocidad [4]=17;

  a=450;
  b=480;
  e=100;
  d=60;
}

function draw() {
  background(58,58,58);
  image(imagenes[2], 0, 390, 1000, 200);
  image(imagenes[2], 0, 100, 1000, 200);

  if ( estado == 0) {
    image(imagenes[10], 0, 0);
    textSize(50);
    fill(63, 240, 64);
    text(texto[0], 350, 200);
    fill(63, 240, 64);
    rect(430, 250, 140, 40);
    rect(400, 330, 200, 40);
    fill (0);
    textSize(22);
    text(texto[1], 440, 280);
    text(texto[2], 409, 360);
    // Botón PLAY
    fill(63, 240, 64);
    rect(a, b, e, d);
    fill(0);
    textSize(22);
    text("PLAY", a + 10, b + 30);
  } else if (estado == 1 ) {
    pantallajugando();
    time();
  } else if (estado == 2 ) {
    background(245, 35, 35);
    textSize(80);
    fill(255);
    text(texto[3], 460, 100);
    textSize(19);
    text(texto[4], 420, 140);
    image(imagenes[11], 0, 100);
    fill(0);
    textSize(15);
    text (texto[11], 400, 700);
  } else if (estado == 3) {
    background(0);
    fill(63, 240, 64);
    textSize(80);
    text(texto[5], 460, 100);
    textSize(19);
    text(texto[4], 420, 140);
    image(imagenes[4], 0, 100);
    fill(63, 240, 64);
    textSize(15);
    text (texto[11], 400, 700);
  } else if (estado == 4) {
    background (0);
    fill(63, 240, 64);
    textSize(50);
    text(texto[2], 300, 100);
    textSize(25);
    text(texto[6], 10, 130, 1000);
    text(texto[7], 10, 280, 1000);
    text(texto[8], 10, 370, 1000);
    fill (63, 240, 64);
    noStroke();
    rect(448, 530, 100, 40);
    fill(0);
    text(texto[9], 460, 560);
  } else if (estado==5) {
    background(0);
    fill(63, 240, 64); //verderfluor
    textSize(60);
    text (texto[10], 400, 100);
    image (imagenes[12], 0, 100);
    fill(63, 240, 64);
    textSize(15);
    text (texto[11], 400, 700);
  }
}

function mousePressed() {
  if ((mouseX> a && mouseX< a+e && mouseY > b && mouseY <b+d)&& (estado==0)) {
    boton=true;
    estado = 1;
  } else if  ((dist(mouseX, mouseY, 205, 185)<=r*2) && (estado==2) ) {
    boton=true;
    estado = 1;
    reiniciar();
  } else if  ((dist(mouseX, mouseY, 315, 185)<=r*2) && (estado==2) ) {
    boton=true;
    estado = 1;
    reiniciar();
  } else if  ((dist(mouseX, mouseY, 205, 185)<=100/2) && (estado==3) ) {
    boton=true;
    estado = 1;
    reiniciar();
  } else if  ((dist(mouseX, mouseY, 315, 185)<=100/2) && (estado==3) ) {
    boton=true;
    estado = 1;
    reiniciar();
  } else if ((mouseX> 400 && mouseX< 400+200 && mouseY > 330 && mouseY <330+40)&& (estado==0)) {
    boton=true;
    estado = 4;
  } else if ((mouseX> 448 && mouseX< 448+100 && mouseY > 530 && mouseY <530+40)&& (estado==4)) {
    boton=true;
    estado = 0;
  } else if ((mouseX> 430 && mouseX< 430+140 && mouseY > 250 && mouseY <250+40)&& (estado==0)) {
    boton=true;
    estado = 5;
  }
}
function keyPressed() {
  if (keyCode=== ESCAPE) {
    if (estado===5) {
      estado = 0;
    } else if (estado === 2) {
      estado= 0;
      reiniciar();
    } else if (estado === 3) {
      estado=0;
      reiniciar();
    }
  }
}

function reiniciar() {
  r= 10;
  jugando= true;
  tiempo=0;
  duracion=20;

  fl = color(255, 180, 246);
  posX[0]=10;
  posX[1]=500;
  posX[2]=200;
  posX[3]=480;
  posX[4]=540;

  posY[0]=395;
  posY[1]=600;
  posY[2]=420;
  posY[3]=205;
  posY[4]=105;

  ancho[0]=150;
  ancho[1]=49;
  ancho[2]=300;
  ancho[3]=168;
  ancho[4]=175;

  alto[0]=64;
  alto[1]=49;
  alto[2]=110;
  alto[3]=70;
  alto [4]=57;

  velocidad[0]= 12;
  velocidad[1]=5;
  velocidad[2]=11.5;
  velocidad [3]=14;
  velocidad [4]=17;
}
