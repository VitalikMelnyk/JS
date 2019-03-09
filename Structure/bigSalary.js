'use strict';
var salary = {};

var salaries = {
    "Vitaliy" : 1000,
    "Misha" : 1500,
    "Alina" : 3000,
    "Vasya" : 700
}
function isEmpty(object) {
    for(var key in object){
        return false;
    }
    return true;
}

function bigSalary(object) {
    var max = 0,
        maxName = "";
    for(var key in object) {
            if(max < object[key]){
                max = object[key];
                maxName = key;
            }
        
       
    }
    return maxName;        
}

console.log(bigSalary(salaries));
