'use strict'
let options = {
    name : "Vitalik",
    age : 25,
    studying : {
        city : "Chernivtsi",
        university : "CNU"
    },
    year : ["First", "Second"]
}


let {name,age, studying : [city, university], year : [first, seconf]} = options;

console.log(name);
