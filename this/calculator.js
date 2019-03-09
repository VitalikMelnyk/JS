var calculator = {
    read : function() {
        this.a = prompt("Input first number: ", '');
        this.b = prompt("Input second number: ", '');    
    },
    mul : function(){
        return this.a * this.b;
    },
    add : function() {
        return this.a + this.b;
    }

};

calculator.read();
alert(calculator.mul());
alert(calculator.add());