function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  };
  
var rabbit = new Rabbit("Rabbit");
var rabbit1 = new rabbit.constructor("Reyman");

rabbit.sayHi();
rabbit1.sayHi();