var acumulator = new Acumulator(1);

function Acumulator(startingValue) {
    
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Input value: ", 0);
    };
}

acumulator.read();
acumulator.read();
alert(acumulator.value);