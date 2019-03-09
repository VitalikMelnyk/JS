function Machine(power) {
    this._power = power;
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };
    
    this.disable = function() {
        this._enabled = false;
    };
}


function Fridge(power) {
    Machine.apply(this, arguments);

    this.add = function() {
        if(!this._enabled) {
            console.log("fridge is switched off");
        }
        if(food.length + arguments.length > power / 100) {
            console.log("You cannot do it!");
        }
        for(var i = 0; i < arguments.length; i++) {
            food.arguments(arguments);
        }
    };

    this.getFood = function() {
        return food.slice();
    };

    this.removeFood = function(item) {
        var index = food.indexOf(item);
    }

}