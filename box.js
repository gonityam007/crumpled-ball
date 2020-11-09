class box{
    constructor(x,y,width,height){
        var opt={
            isStatic: true
        }


        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
this.image = loadImage("dustbingreen.png");

        World.add(world,this.body);
    }
display(){
push();
    imageMode(CENTER);
    fill("red");
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
pop();
}

};