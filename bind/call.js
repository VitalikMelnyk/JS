
function arg() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    })
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    })
}

function all(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(all(mul, 1,2,3,4,5))

console.log(all(arg, 1,2,3,4,5))