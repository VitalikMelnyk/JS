function Car(name, age) {
    this.name = name;
    this.age = age;
    this.drive = true;
    var welcome = "Welcome";
    function fullInformation() {
        return name + " : " + age; 
    };
    this.welcome = function() {
        console.log(welcome + " : " + fullInformation());
    }
}

var car = new Car("Mazda", 2000);
// console.log(car.name);

car.welcome();


