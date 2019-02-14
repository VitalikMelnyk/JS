var arr = [23,425,24554,53,245,2456,3,4];

var newArr = arr.reduce(function(sum,current){
    return sum + current;
});

console.log(newArr);