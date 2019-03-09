var home = {},
    football = {
        goalkeeper : "Van der Sar",
        midfielder : "De Jong",
        attacker : "Depay"
    };
 
    
function isEmpty(object) {
    for(var key in object) {
        return false;
    }
    return true;
}    

console.log(isEmpty(home));
console.log(isEmpty(football));