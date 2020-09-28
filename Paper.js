class Paper {
  constructor(x,y,width,height){
      var options={
        restitution: 0.3,
        friction: 0.2,
        density: 0.5, 
        //isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width
      this.height=height
      this.image=loadImage("paper.png");
      World.add(world,this.body);
     
  }
  display(){
      //this.body.rectangle(this.x, this.y, this.width, this.height, this.image);
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
      image(this.image,0,0, this.width, this.height);
      pop();
  }
}