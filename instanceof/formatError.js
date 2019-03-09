function FormatError(message) {
    this.message = message;
    this.name = "FormatError";

    if(Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    else{
        this.stack = (new Error().stack);
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("Ошибка форматування!");

console.log(err.name);
console.log(err.message);
console.log(err.stack);
console.log(err instanceof SyntaxError);