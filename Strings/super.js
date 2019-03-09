var animal = {
    walk() {
        console.log("I am walking");
    }
};

var rabbit = {
    __proto__ : animal,
    walk() {
        console.log(super.walk);
        super.walk();
    }
}

rabbit.walk();