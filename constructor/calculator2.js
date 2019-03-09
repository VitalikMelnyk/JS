function Calculator() {
    var method = {
        "+" : function(a, b) {
            return a + b;
        },
        "-" : function(a, b) {
            return a - b;
        }         

    };
    this.calculate = function(str) {
        var split = str.split(" "),
        a = +split[0],
        b = +split[2],
        op = split[1]
    
        if(!method[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return method[op](a, b);
    }

    this.addMethod = function(name, func) {
        method[name] = func;
    }

}

calculator.addMethod("*", function(a, b) {
    return a * b;
});
calculator.addMethod("/", function(a, b) {
    return a / b;
});
calculator.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});




var calculator = new Calculator();
var result = calculator.calculate("3 * 3");
console.log(result);