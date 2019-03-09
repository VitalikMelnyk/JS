// function sum() {
//     arguments.reduce = [].reduce;
//     return arguments.reduce(function(a, b) {
//         return a + b;
//     });
// }
function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

console.log(sum(2,3,4,5,5));