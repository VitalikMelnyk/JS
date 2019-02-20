var arr = [1,2,1,22,-3,-4];

function filtered(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i] >= 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(filtered(arr));