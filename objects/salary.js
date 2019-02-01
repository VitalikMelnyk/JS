"use strict"

var salaries = {
    "Vitalik" : 1000,
    "Michael" : 2000,
    "Illa" : 1550,
    "Alina" : 3500 
}
var salaries1 = {};

function isEmpty(obj) {
    for(key in obj){
        return true;
    }

    return false;
}

function suma(obj) {
 var sum = 0;   
    for (var key in obj){
        if(isEmpty()){
            return 0;
        }
        else{
            sum += obj[key]; 
        }
    }
    return sum;
}


console.log(suma(salaries));
console.log(suma(salaries1));