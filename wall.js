class Wall {
    constructor(x,y,radius){
       var options= {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        //this.width = width;
       
        World.add(world, this.body);
    }
display(){
    var pos =this.body.position;
    fill("brown");
      ellipse(pos.x, pos.y, this.radius, this.radius);
}
}