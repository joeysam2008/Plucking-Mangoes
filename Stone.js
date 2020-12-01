  class Stone{
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.x=x;
		    this.y=y;
        this.r=r;
        
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var stonePos1 = this.body.position;
        var angle = this.body.angle;
        push();
        translate(stonePos1.x, stonePos1.y);
        rotate(angle);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}