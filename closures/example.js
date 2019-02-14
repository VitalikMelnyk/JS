function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

var add1 = makeAdder(10);
var add2 = makeAdder(15);

console.log(add1(7));

console.log(add2(2));