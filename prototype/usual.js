function Animal(name) {
    this.speed = 0;
    this.name = name;

    this.run = function(speed) {
        this.speed += speed;
        console.log(this.name + ": his speed = " + this.speed);
    };

    this.stop = function() {
        this.speed = 0;
        console.log(this.name + ": his speed is stopped = " + this.speed)
    };
}

var animal = new Animal("Lion");

animal.run(300);
animal.stop();