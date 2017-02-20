var myImg, myTra;

function preload() {
  myImg = loadImage("space.jpg");
  myTra = loadImage("transparent.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  backgroundImage(myImg);
  backgroundImage(myTra);
  //image(myRect,0,0,width,height);
  //translate(0,-1*(height/17));
  
  if(mouseIsPressed === true) {
  myImg.filter("invert",0.1);
  fill(40);
  textSize(width/8);
  textAlign(CENTER);
  textFont('futura');
  text(hour(),width/4,height/2);
  text(minute(),width/4*2,height/2);
  text(second(),width/4*3,height/2);
  } else {
  fill(255);
  textSize(width/8);
  textAlign(CENTER);
  textFont('futura');
  text(hour(),width/4,height/2);
  text(minute(),width/4*2,height/2);
  text(second(),width/4*3,height/2);
  //day,month,year
  var s=month();
  if(s==1) currentMonth = "January";
  if(s==2) currentMonth = "February";
  if(s==3) currentMonth = "March";
  if(s==4) currentMonth = "April";
  if(s==5) currentMonth = "May";
  if(s==6) currentMonth = "June";
  if(s==7) currentMonth = "July";
  if(s==8) currentMonth = "August";
  if(s==9) currentMonth = "September";
  if(s==10) currentMonth ="October";
  if(s==11) currentMonth = "November";
  if(s==12) currentMonth = "December";
  fill(255);
  textSize(width/30);
  textAlign(CENTER); 
  textFont('futura');
  text(day()+" "+currentMonth+" "+year(),width/2+50,height/4*3);
  }
  }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  function backgroundImage(img) {
  var x=0;
  var y=0;
  var w=width;
  var h=height;
  var offsetX=0.5;
  var offsetY=0.5;

  var iw = img.width,
  ih = img.height,
  r = Math.min(w/iw,h/ih),
  nw = iw*r,
  nh = ih*r,  
  cx,cy,cw,ch,ar=1;

  if (nw<w)ar=w/nw;                             
  if (Math.abs(ar-1)<1e-14 && nh<h)ar=h/nh;  
  nw *= ar;
  nh *= ar;
  cw = iw/(nw/w);
  ch = ih/(nh/h);
  cx = (iw-cw)*offsetX;
  cy = (ih-ch)*offsetY;

  if (cx<0)cx=0;
  if (cy<0)cy=0;
  if (cw>iw)cw=iw;
  if (ch>ih)ch=ih;
  
  image(img,cx,cy,cw,ch,x,y,w,h);
}
