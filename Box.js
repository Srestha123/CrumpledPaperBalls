class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var a= this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(a.x,a.y,this.width,this.height);
    }
}