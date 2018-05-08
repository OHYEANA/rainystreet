var img;
var i;
var move;
move=0;
function preload() {
  img = loadImage('rain.jpg');
}
function setup() {
  createCanvas(800,600);
  frameRate(3);

}

function draw() {
  image(img, 0, 0,800,600);
  for(i=1;i<300;i++){
    var v;
    v=random(0,width);
    move++;
   
    if (mouseIsPressed) {
    stroke(random(0,255),random(0,255),random(0,255),random(0,200));
    line(v, random(0,height),v,random(0,height));
  }
  else{
    strokeWeight(random(0,3));
     stroke(255,random(0,200));
    line(v, random(0,height),v,random(0,height));
  }
    
  }  
}