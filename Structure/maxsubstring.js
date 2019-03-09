var arr = [1,2,5,-20,-10,4,2];

function getMax(array) {
    var maxSum = 0;
    var partSum = 0;
    for(var i = 0; i < array.length; i++) {
        partSum += arr[i];
        maxSum = Math.max(maxSum, partSum);
        if(partSum < 0){
            partSum = 0;
        }
    }
    return maxSum;
}

console.log(getMax(arr));