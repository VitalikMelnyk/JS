function sum(a) {
    return function (b) {
        return a + b;
    }
}

// var d = sum(4)(2);
// console.log(d);

console.log(sum(10)(25));