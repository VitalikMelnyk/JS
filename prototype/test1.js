var object = {
    name : "Mazda",
    age : 23
};

var human = {
    leg : "Left"
};


object.__proto__ = human;

console.log(object.hasOwnProperty("name"));
console.log(object.hasOwnProperty("leg"));
