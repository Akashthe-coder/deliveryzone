class Siderect{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,20,options);
        this.width=400;
        this.height=20;
        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER);
            fill("red");
            rect(0,0,this.width,this.height)
            pop()
        }
    
}
