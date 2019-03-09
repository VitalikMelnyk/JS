function Animal(name) {
    this.name = name;
    this.speed - 0;
}

Animal.prototype.run = function(speed) {
    this.speed += speed; 
    console.log(this.name + " is speed "  + this.speed);
};

Animal.prototype.stop = function() {
    this.speed = 0;
    console.log(this.name + " is stopped " + this.speed);
};

function Rabbit(name) {
    // this.name = name;
    // this.speed = 0;
    Animal.apply(this,arguments);   
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function() {
    this.speed++;
    console.log(this.name + " is jumping: " + this.speed);   
};


var rabbit = new Rabbit("Rabbit");

rabbit.jump();
rabbit.run(200);
rabbit.stop();
