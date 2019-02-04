var arr = [1,-2,-4,-5],
    arr1 = [0,1,-1],
    arr2 = [0,1,-1,-21];


function getMin(array) {
    min = 0;
    partMin = 0;
    for(var i = 0; i < array.length; i++) {
        partMin += array[i];
        min = Math.min(min, partMin);
        if(partMin > 0){
            partMin = 0;
        }
    }
    return min;
}

console.log(getMin(arr));
console.log(getMin(arr1));
console.log(getMin(arr2));