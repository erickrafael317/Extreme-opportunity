class Bolinha{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
  }
  exibir(){
    circle(this.pos.x, this.pos.y,30);
  }
}