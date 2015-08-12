var Sub = function(){
    var texture = PIXI.Texture.fromImage('img/submersible.png');
    PIXI.Sprite.call(this, texture);
    // Setup the position and scale of the bunny
    this.position.x = 400;
    this.position.y = 300;
    this.scale.x = 1;
    this.scale.y = 1;
    this.pivot = new PIXI.Point(200 / 2, 150 / 2);
    this.velocity = {x : 0, y: 0};
}

Sub.prototype = Object.create(PIXI.Sprite.prototype);

function clamp(x, min, max){
    return Math.min(Math.max(x, min), max);
}
Sub.prototype.update = function(keyboard){
    //console.log("W: " + keyboard.isWPressed());
    //console.log("S: " + keyboard.isSPressed());
    /*if(keyboard.isWPressed()){
        this.velocity.rotation -= 0.1;
    }

    if(keyboard.isSPressed()){
        this.velocity.rotation += 0.1;
    }*/

    if(keyboard.isDPressed()){
        this.velocity.x += 0.2;
    }

    if(keyboard.isAPressed()){
        this.velocity.x -= 0.2;
    }

    //Fricton
    this.velocity.x *= 0.97;

    this.velocity.y = clamp(this.velocity.y, -8, 8);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.rotation = 0.4 * (this.velocity.x / 6);

    if(this.velocity.x > 0) {
        this.scale.x = 1;
    } else if(this.velocity.x < 0) {
        this.scale.x = -1;
    }
    //console.log(this.velocity);
    //console.log(this.position);
};
