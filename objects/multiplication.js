var flat = {
    floor : 2,
    quantityofpeople : 10,
    width : 140,
    length : 100,
    "name" : "Waterfall",
    ownerSurname : "Melnyk",
    ownerName : "Vitalik"
 };


 function isNumeric(n) {
     return isFinite(n);
 }

 function multiplication(obj) {
    for(var key in obj){
        if(isNumeric(obj[key])){
            var mul = obj[key] * 2;
            obj[key] = mul;
        }
    }
    return obj;
 }

console.log(multiplication(flat));
console.log(flat.name);
