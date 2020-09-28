class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        this.body=loadImage("dustbin.png")
        World.add(world,this.body)
       
    }
    display(){
        imageMode(CENTER)
        image(this.body,1500,700,200,200)
    }
}