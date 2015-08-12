var Wave = function() {
    PIXI.Graphics.call(this);
}

Wave.prototype = Object.create(PIXI.Graphics.prototype);

function createWave(frequency, waveSpeed, waveHeight){
    return function(i, step){
        return Math.sin(i * frequency) * Math.sin(step * waveSpeed) * waveHeight
    }
}

Wave.prototype.update = function(screenWidth, screenHeight, step){
    var level = 90;

    var waves = [];
    waves.push(createWave(5, 0.08, 9));
    waves.push(createWave(10, 0.05, 3));

    this.clear();
    this.beginFill(0x0000FF, 0xFFFFFF);
    var points = [0, screenHeight];
    for(var i = 0; i <= screenWidth; i += 10){
        points.push(i);
        var waveY = 0;
        waves.forEach(function(waveFunction){
            waveY += waveFunction(i, step);
        });
        points.push(waveY + level);
    }
    points.push(screenWidth);
    points.push(screenHeight);
    this.drawPolygon(points);
    this.endFill();
}
