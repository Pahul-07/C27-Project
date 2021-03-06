class Rubber{
    constructor(x,y,radius)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
        
        this.radius=2*radius
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        circle(0,0,this.radius);
        pop();     
    }
}