var caluclator = new Caluclator();

function Caluclator() {
    this.read = function() {
        this.first = +prompt("input first number", 0);
        this.second = +prompt("Input second number", 0); 
    }

    this.sum = function() {
       return (this.first + this.second);
    }
    
    this.mul = function() {
       return this.first * this.second;
    }
}

caluclator.read();

alert("Sum of two numbers: " + caluclator.sum());
alert("Multiplication of two numbers: " + caluclator.mul());
