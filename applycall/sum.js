// function sumArg() {
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
function sumArg() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b) {
        return a + b;
    })
}

console.log(sumArg(1,2,3,4,5,6));