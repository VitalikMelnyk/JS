function CoffeeMaker(power, capacity) {
    this.coffeeCount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var timerId;
    var self = this;
    function getTimeToBoil() {
        return self.coffeeCount * WATER_HEAT_CAPACITY * 80 / power;
    }

// add water
    this.addWater = function(amount){
        this.setCoffeeAmount(coffeeCount + amount);
    }

// 
    this.setCoffeeAmount = function(amount) {
        if(amount < 0){
             console.log("Amount must be positive!");
        }
        if(amount > capacity) {
            console.log("This is cannot  < capacity" + capacity );
        }
        coffeeCount = amount;
     }  
     this.getCoffeeAmount = function() {
         return coffeeMaker;
     }

    function onReady() {
        console.log("Coffee is ready!");
    }
    this.run = function(){
        timerId = setTimeout(onReady,getTimeToBoil());
    }
    this.stop = function() {
        clearTimeout(timerId);
    };
}

var coffeeMaker = new CoffeeMaker(10000, 500);
coffeeMaker.coffeeCount = 200;
// coffeeMaker.run();

coffeeMaker.setCoffeeAmount(700);
console.log(coffeeMaker.getCoffeeAmount());
