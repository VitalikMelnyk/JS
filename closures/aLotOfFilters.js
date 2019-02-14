var array = [1,2,3,4,5,6,7,8,9,10];

function filter(arr, func) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        val = arr[i];
        if(func(val)) {
            result.push(val);
        }
    }
    return result;
};

function isBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
};

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    }
}

console.log(filter(array, isBetween(2,10)));