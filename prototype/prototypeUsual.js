function Animal(name) {
    this.name = name;
    this.speed = 0;
};

Animal.prototype.run = function(speed) {
    this.speed += speed;
    console.log(this.name + ": his speed = " + this.speed);
};

Animal.prototype.stop = function() {
    this.speed = 0;
    console.log(this.name + ": his speed is stopped = " + this.speed);
};

var animal = new Animal("Elephant");

animal.run(455);
animal.run(10);