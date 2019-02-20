var arr = [1,2,3,4,5];

function filtered(arr) {
    var result = [];
    var average = 0;

    for(var i = 0; i < arr.length; i++){
        average += arr[i];
    }
    average = average / arr.length;

    for(i = 0; i < arr.length; i++){
        if(arr[i] <= average) {
            result.push(arr[i]);
        }
    }

    return result;
}

;
console.log(filtered(arr));