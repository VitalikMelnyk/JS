function makeBuffer() {
    var buf = "";

    function buffer(value) {
        if(arguments.length == 0) {
            return buf;
        }
        buf += value;
    };
    buffer.clean = function() {
        buf = " ";
        
    }
    return buffer; 
   
};      

var buffer = makeBuffer();

buffer("Vitalik ");
buffer("Melnyk ");
buffer("IT ");
buffer.clean();
console.log(buffer())

