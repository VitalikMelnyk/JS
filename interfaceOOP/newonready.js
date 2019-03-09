function CoffeeMaker(power, capacity) {
    var waterAmount = 0;
    var timerid;
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };
  
    this.getWaterAmount = function(amount) {
      return waterAmount;
    };
    
    this.getOnReady = function(newOnready) {
        onReady = newOnready;
    }
  
    function onReady() {
        console.log( 'Кофе готов!' );
      }
  
    this.run = function() {
     timerid = setTimeout(function(){
        timerid = null;  
        onReady();
      }, getTimeToBoil());
    };
    
    this.isRunning = function() {
        return !!timerid;
    }
  
  }

  var coffeeMaker = new CoffeeMaker(10000,500);
  coffeeMaker.setWaterAmount(150);
  console.log(coffeeMaker.isRunning());
  coffeeMaker.run();

  coffeeMaker.getOnReady(function(){
      var amount = coffeeMaker.getWaterAmount();
      console.log("Coffee is ready" + amount + "ml");
  });