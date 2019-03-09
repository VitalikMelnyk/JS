String.prototype.repeat = function(times) {
    return new Array(times + 1).join(this);
};
console.log("Melnyk ".repeat(5));