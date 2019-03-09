let car = {
    model : "BMW",
    age : 2007
};

let wheel = {
    is : true
};

let windows = {
    quantity : 4
};

Object.assign(car, wheel, windows);
console.log(car);