class Snow{
    constructor(x,y,r){
        var options = {
            density: 3,
            friction: 0,
            restitution: 0
        }

        this.r=r

        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);

    }

    display(){

        var snowpos = this.body.position;
        
        push();
        translate(snowpos.x,snowpos.y)
        image(this.image,0,0,this.r,this.r)

    }

    setposition(){
        if(this.body.position.y > 400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0})
          }
    }

}