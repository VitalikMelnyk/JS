function filtered(array, a, b) {
    result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] >= a && array[i] <= b){
            result.push(array[i]);
        }
    }
    return result;
}

var arr = [53,25,1,2,3,14,11,0,19];

console.log(filtered(arr, 1, 19));
console.log(arr);