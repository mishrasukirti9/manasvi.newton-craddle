class bob {
    constructor(x, y, r) {
      var options = {
        isStatic: false,
        'restitution':1,
        'friction':0,
        'density':0.3
      }
      this.r = r
      this.x = x
      this.y = y
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
   
  
      World.add(world, this.body);
      }
    display(){
      var paperpos=this.body.position;
			push()
      ellipseMode(RADIUS);
      translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			ellipse(0,0,this.r, this.r);
      fill("pink");
     // ellipse(this.body.position.x,this.body.position.y,2*this.radius,2*this.radius)
      //circle(this.body.position.x, this.body.position.y, this.radius);
      pop();
    }
    }; 
