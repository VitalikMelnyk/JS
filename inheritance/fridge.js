function Machine(power) {
    this._enabled = false;
    this._power = power;

    this.enable = function() {
        this._enabled = true;
    };
    
    this.disable = function() {
        this._enabled = false;
    }
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    this.addFood = function() {
        if(!this._enabled) {
            console.log("The fridge is switched off!");
        }
        if(food.length + arguments.length > this._power / 100) {
            console.log("You cannot do it!");
        }
        for(var i = 0; i < arguments.length; i++){
        food.push(arguments[i]);
        }
    };
    
    this.getFood = function() {
        return food.slice();
    };

    this.filterFood = function(filter) {
        return food.filter(filter);
    };

    this.removeFood = function(item) {
        var index = food.indexOf(item);
        if(index != -1) {
            food.splice(index, 1);  
        }
    }

    var newDisable = this.disable;
    this.disable = function() {
        if(food.length) {
            console.log("Food is!");
        }
        newDisable();
        
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.disable();

// fridge.addFood({
//   title: "сок",
//   calories: 30
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150
// });

// // fridge.removeFood("нет такой еды"); // без эффекта
// // console.log( fridge.getFood().length ); // 4

// var dietItems = fridge.filterFood(function(item) {
//   return item.calories < 50;
// });

// // dietItems.forEach(function(item) {
// //   console.log( item.title ); // сок, зелень
// //   fridge.removeFood(item);
// // });

// // console.log( fridge.getFood().length ); // 2
