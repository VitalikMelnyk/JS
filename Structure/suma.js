'use strict'

var salaries = {
    "Vitaliy" : 1000,
    "Misha" : 1500,
    "Alina" : 3000,
    "Vasya" : 700
};

var salary = {};

function isEmpty(object) {
    for(var key in object){
        return false;
    }

    return true;
}

function suma(object) {
    var sum = 0;
    for(var key in object) {
        if(!isEmpty){
            return 0;
        }

        sum += object[key];
    }
    return sum;
}

console.log(suma(salaries));
console.log(suma(salary));