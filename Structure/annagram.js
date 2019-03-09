var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    var object = {};

    for(var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split("").sort().join('');
        object[sorted] = arr[i];
    }

    var res = [];

    for(var key in object) {
        res.push(object[key]);
    }
    return res;
}


console.log(aclean(arr));