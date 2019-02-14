function sayHi(){
    for(var i = 0; i < arguments.length; i++) {
        console.log("Hello " + arguments[i]);
    }
}

sayHi("Vitaliy", "Misha", "Alina");