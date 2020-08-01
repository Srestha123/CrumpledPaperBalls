class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            
            density:1.2,
            
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
      
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(a.x,a.y,this.radius,this.radius);
    }
    motion(){
     if(keyCode === UP_ARROW) {
         Matter.Body.applyForce(this.body,this.body.position,{x:3,y:-19.1});
       
     }
     
    }
}