function aclean(array) {
    var object = {};
    for(var i = 0; i < array.length; i++){
        var sorted = array[i].toLowerCase().split("").sort().join('');
        object[sorted] = array[i];
    }
    var result = [];
    for(var key in object){
        result.push(object[key]);
    }
    return result;
}


var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));