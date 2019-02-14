var arr = ["HTML","CSS","JavaScript","MySQL"];

var newArr = arr.map(function(value) {
    return value.length;
});

console.log(newArr);