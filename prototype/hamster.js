function Hamster() {
    this.food = [];
};



Hamster.prototype.found = function(item) {
    this.food.push(item);
}



var hamster = new Hamster();
var chick = new Hamster();

hamster.found("Apple");
console.log(hamster.food.length);
console.log(chick.food.length);