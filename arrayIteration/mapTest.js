var arr = ["Есть", "жизнь", "на", "Марсе"];

var newArr = arr.map(function(value) {
    return value.length;
});

console.log(newArr);