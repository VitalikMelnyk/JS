var arr = [1,5,24,-7,436,235,-3,35,3527,457,474,7];

var newArr = arr.every(function(number) {
    return number > 0;
});

var res = arr.some(function(number) {
    return number > 0;
});

console.log(res);
console.log(newArr);

