var Wave = function() {
    PIXI.Graphics.call(this);
    //this.lineColor(2, 0x000000, 1);

}

Wave.prototype = Object.create(PIXI.Graphics.prototype);

Wave.prototype.update = function(screenWidth, screenHeight, step){
    var frequency = 10;
    var waveSpeed = 0.15
    var waveHeight = 5
    var level = 40;

    this.clear();
    this.beginFill(0xFF0000, 0xFFFFFF);
    var points = [0, screenHeight];
    for(var i = 0; i <= screenWidth; i += 5){
        points.push(i);
        points.push((Math.sin(i * frequency) * Math.sin(step * waveSpeed) * waveHeight) + level);
        //points.push(10);
    }
    points.push(screenWidth);
    points.push(screenHeight);
    this.drawPolygon(points);
    this.endFill();
}
