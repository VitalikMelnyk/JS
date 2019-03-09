function Machine(power) {
    this._enabled = false;
    this._power = power;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    }
};



function CoffeeMachine(power) {
    Machine.apply(this,arguments);

    var waterAmount = 0;
    var timedId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };
    function onReady() {
        console.log("Coffee is ready!");
    }
    var parentValue = this.disable;
    this.disable = function() {
        parentValue.call(this);
        clearTimeout(timedId);
    }


    this.run = function() {
        if(!this._enabled) {
            console.log("CoffeeMaker is switched off");
        }
        timedId = setTimeout(onReady,2000);
    }
    
    // console.log(this._enabled);
    // console.log(this._power);


};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
// coffeeMachine.setWaterAmount(200);
// coffeeMachine.disable();
coffeeMachine.run();
coffeeMachine.disable();



