class Ball {
  constructor(x,y,radius) {
    var options = {
      density:1.2,
      frictionAir:0.0001
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("grey");
    ellipse(pos.x, pos.y, this.radius,this.radius);
  }
}

