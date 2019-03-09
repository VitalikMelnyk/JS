function sum(a, b) {
    return a + b;
}

var double = sum.bind(null, 2);

console.log(double(3));