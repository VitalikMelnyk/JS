function CoffeeMaker(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    
    function getBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    };

    function onReady() {    
        console.log("Coffee is ready!")
    };

    this.run = function() {
        setTimeout(onReady, getBoil());
    };

    this.setWaterAmount = function(amount) {
        if(amount < 0) {
            throw new Error("Amount must be positive");
        }
        if(amount > capacity) {
            throw new Error("Amount must be <= capacity");
        }
        waterAmount = amount;
    };
    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    };

}


var  coffeeMaker = new CoffeeMaker(200, 500);

coffeeMaker.addWater(230);
