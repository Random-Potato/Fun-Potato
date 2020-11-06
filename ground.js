class ground{
    constructor(x,y,width,height){
        var options  = {
            isStatic: true,
            friction: 1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("the colour white");
        stroke("lime");
        strokeWeight(4);
        rect(position.x,position.y,this.width,this.height);
    }
}