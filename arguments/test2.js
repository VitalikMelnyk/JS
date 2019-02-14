'use strict';
var building = {
    age : 2 
};

var firstFloor = {
    name : "Restourant",
    Admin : "Vitalik"
};

var secondFloor = {
    name : "Pub",
    isEntry : true
};

var thirdFloor = {
    isEntry : false 
};
function copy(dst) {
    for(var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        for(var key in arg) {
            dst[key] = arg[key];
        }
    }
    return dst;
}



copy(building, firstFloor, secondFloor, thirdFloor);
console.log(building.Admin);