class Horirect{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,100,options);
        this.width=20;
        this.height=150;
        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER);
            strokeWeight(1)
            stroke("red")
            fill("red");
            rect(0,0,this.width,this.height)
            pop()
        }
    
}
