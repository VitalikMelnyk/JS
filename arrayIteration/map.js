var arr = [1,523,23,213,54,235,23,5532,235];

// var newArr = arr.map(function(value) {
//     return value.length;
// });

// console.log( newArr );

var newArr = arr.map(myFunction);

function myFunction(value) {
    return value * 2;
}

console.log(newArr);
