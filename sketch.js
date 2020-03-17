var Engine=Matter.Engine,World=Matter.World,Bodies=Matter.Bodies,engine,world,boxes=[];
function setup(){createCanvas(1200,500);
engine=Engine.create();
world=engine.world;
Engine.run(engine);}
function mousePressed(){boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));
boxes.push(new Box(random(0,1200),random(-55,-110),random(3,4),random(20,55)));}
function draw(){background(0);
for(var i=0;i<boxes.length;i++){boxes[i].show();}
fill("cyan"),textSize(20);
text("'' Press ' Left Click ' to spawn ' Colorful Rain Drops ' randomly ''",325,200);}
function Box(x,y,w,h,options){var options={friction:0.3,restitution:0.6}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w=w,this.h=h;
World.add(world,this.body);
this.show=function(){var pos=this.body.position,angle=this.body.angle,r,g,b=0;
r=random(0,255),g=random(0,255),b=random(0,255);
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
noStroke();
fill(r,g,b);
rect(0,0,this.w,this.h);
pop();}}