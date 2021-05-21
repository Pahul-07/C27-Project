class Hammer {
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1,
            'density': 2
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {   
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("orange");
        stroke("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}
