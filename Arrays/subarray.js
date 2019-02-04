var arr = [1,5,3,7,8,-1,3,5,-7,4];
var arr1 = [-1,-2,-3];
var arr2 = [1,2,3,4,-1];

function getMax(array) {
    var sum = 0;
    partSum = 0;   
    for(var i = 0; i < array.length; i++){
        partSum += array[i];
        sum = Math.max(sum, partSum);
        
        if(partSum < 0) {
            return 0;
        }
    }
    return sum;
}
console.log(getMax(arr));

console.log(getMax(arr1));

console.log(getMax(arr2));