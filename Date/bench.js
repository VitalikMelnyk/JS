var arr = [];

for(var i = 0; i < 1000; i++) {
    arr[i] = 0;
}

function walk(arr) {
    for(i = 0; i < arr.length; i++) {
        arr[i]++;
    }
}


function walking(arr) {
    for(var key in arr) {
        arr[key]++;
    }
}

function bench(arr) {
    var date = new Date();
    for(i = 0; i < 10000; i++) {
        bench(arr);
    }
    var datend = new Date();
    return datend = date;
}

var timein = 0;
var partin = 0;

for(var i = 0; i < 100; i++) {
    timein += bench(timein);
    partin += bench(partin);
}



console.log(timein);
console.log(partin);