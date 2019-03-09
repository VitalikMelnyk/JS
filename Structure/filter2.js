var arr = [5,6,23,1,9,10,21,14,11,24];


function filtered(array, a, b) {
    for(var i = 0; i < array.length; i++) {
        var value = array[i];
        if(value < a || value > b) {
            array.splice(i--, 1);
        }
    }
}


filtered(arr, 5, 11);
console.log(arr);