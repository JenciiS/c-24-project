class ComputerBase{
    constructor(x,y,w,h){
        var options={
            isStatic : true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("./assests/base2.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}