PImage  bicitecno;
void setup() {
  size (800, 400);
  bicitecno = loadImage ("bicitecno.jpg");
  image (bicitecno, 0, 0, 400, 400);
}
void draw () {
  fill ( 242, 242, 242);
  stroke (242,242,242);
  rect (400, 0, 400, 180);
  fill (242, 236, 203); //color amarillito)//
  stroke (242,236,203);
  rect (400, 180, 400, 120);
  fill (198, 198, 198); 
  stroke (198,198,198);
  rect (400, 300, 400, 100);
  fill ( 0);
  stroke (0);
  ellipse (500,240,130,130); 
  ellipse (700,240,130,130);
  fill (224,224,224);
  ellipse (500,240,120,120);
  ellipse (700,240,120,120);
  fill (242,236,203);
  ellipse (500,240,100,100);
  ellipse (700,240,100,100);
  fill ( 0);
  ellipse (500,240,15,15);
  ellipse (700,240,15,15);
fill (242,236,203);
triangle (500,240,600,240,600,270);
ellipse (590,255,35,35);
fill (224,224,224);
ellipse (590,255,25,25);
fill(242,236,203);
ellipse(590,255,10,10);
noFill ();
strokeWeight (3);
triangle (500,240,570,250,570,150);
triangle (570,240,570,150,690,150);
line (700,240,690,120);
line (570,150,550,120);
fill (152,81,5);
stroke (152,81,59);
bezier(510,115,590,115,610,120,530,125);

bezier(680,120,700,120,710,120,740,100);
fill(224,224,224);
stroke(211,209,209);
line (590,255,590,290);
line (590, 235,590,210);
stroke (188,188,188);
line (580,278,595,295);
line (580,210,600,210);









  
}
