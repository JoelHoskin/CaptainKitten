var Sub = function(){
    PIXI.Sprite.call(this, PIXI.Texture.fromImage('img/submersible.png'));
    // Setup the position and scale of the bunny
    this.position.x = 400;
    this.position.y = 300;
    this.scale.x = 1;
    this.scale.y = 1;
    this.velocity = {x : 0, y: 0};
}

Sub.prototype = Object.create(PIXI.Sprite.prototype);

function clamp(x, min, max){
    return Math.min(Math.max(x, min), max);
}
Sub.prototype.update = function(keyboard){
    //console.log("W: " + keyboard.isWPressed());
    //console.log("S: " + keyboard.isSPressed());
    if(keyboard.isWPressed()){
        this.velocity.y -= 0.1;
    }

    if(keyboard.isSPressed()){
        this.velocity.y += 0.1;
    }

    if(keyboard.isDPressed()){
        this.velocity.x += 0.1;
    }

    if(keyboard.isAPressed()){
        this.velocity.x -= 0.1;
    }

    this.velocity.y = clamp(this.velocity.y, -2, 2);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    //console.log(this.velocity);
    //console.log(this.position);
};
