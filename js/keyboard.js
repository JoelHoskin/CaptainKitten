var keys = {87: 'W', 68: 'D', 83: 'S', 65: 'A'};
var Keyboard = function(document){
    var keyPressed = {};
    for(var key in keys){
        keyPressed[key] = false;
        
        function createHandler(current_key){
            return function(){
                return keyPressed[current_key];
            }
        }

        this['is' + keys[key] + 'Pressed'] = createHandler(key);
    }

    document.addEventListener('keydown', function(e){
        keyPressed[e.keyCode] = true;
    });

    document.addEventListener('keyup', function(e){
        keyPressed[e.keyCode] = false;
    });
}
