function multiply(x) {
    return function(y) {
        return x * y;
    }
}

var second = multiply(5);

console.log(second(5));