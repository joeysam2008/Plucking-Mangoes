class Tree{
    constructor(x,y,width,height)
    {
        var options={
        isStatic: true

        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image= loadImage("tree.png");

    }

    display()
    {
        var pos1 = this.body.position.x;
        var pos2 = this.body.position.y;
        image(this.image, pos1, pos2,450,500)
    }

}