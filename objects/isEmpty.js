function isEmpty(obj) {
    for(key in obj){
        return false;
    }

    return true;
}


var Human = {};
var People = {
    name : "Vitalik"
};


console.log(isEmpty(Human));
console.log(isEmpty(People));