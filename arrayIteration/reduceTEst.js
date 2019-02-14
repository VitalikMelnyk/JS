function getSum(arr) {
    var result = [];
    if(!arr.length){
         return result;
     }

 var partSum = arr.reduce(function(sum, current){
        result.push(sum);
        return sum + current;

});

    result.push(partSum);

    return result;
}

var arr = [1,2,3,4,5],
    arr1 = [5,6,23,32,324,5425,1];
    arr2 = [];

console.log(getSum(arr));
console.log(getSum(arr1));
console.log(getSum(arr2));

