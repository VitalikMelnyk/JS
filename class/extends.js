class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("I walk: " + this.name); 
    }
};



class Child extends Animal {
    walk() {
        super.walk();
        console.log("... and jump.")
    }
};


// new Child("Rabbit").walk();
let child = new Child("Rabbit");
child.walk();