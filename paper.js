class paper{
    constructor(x,y){
        var opt={
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }


    
    this.body=Matter.Bodies.circle(x,y,50,opt);
    this.image = loadImage("paper.png");
    

        World.add(world,this.body);
    }
display(){
    
    push();
    fill("red");
    imageMode(RADIUS)
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}

};