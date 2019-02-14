function makeBuffer() {
    var buf = " ";

    return function(value) {
        if(arguments.length == 0) {
            return buf;
        }
        buf += value;
    }
}

var buffer = makeBuffer();

buffer("Vitalik ");
buffer("Melnyk ");
buffer("Is");
console.log(buffer());

