function sum(){
    var suma = 0;
    for(var i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(sum(1,2,3,4,5));